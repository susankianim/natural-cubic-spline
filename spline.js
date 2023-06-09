import matrix from "matrix-js"
import Polynomial from "polynomial"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv());
    return A_inv.prod(b);
}

class Issue {
    constructor(x_, values, rule, is_natural = true) {
        this.is_natural = is_natural
        this.rule = rule;
        this.values = values;
        this.x_ = x_;
        this.n = x_.length - 1;
        this.h = x_.slice(1).map((num, i) => num - x_[i]);
        this.h.unshift(NaN);
    }

    f(x) {
        if (x.length > 1) {
            return (this.f(x.slice(1)) - this.f(x.slice(0, -1))) / (x[x.length - 1] - x[0]);
        }
        else {
            x = x[0];
            if (this.rule) return eval(this.rule);
            else {
                return this.values[(this.x_).indexOf(x)];
                // if (x == 1) return -1
                // else return (x ** 2)
            }
        }
    }

    make_matrix_A() {
        let mu = this.h.slice(1).map((num, i) => this.h[i] / (num + this.h[i]));
        let lambda = mu.map(x => 1 - x);

        let A = Array.from(Array(this.n - 1), () => new Array(this.n + 1).fill(0))
        for (let i = 1; i < this.n; i++) {
            A[i - 1][i - 1] = mu[i]
            A[i - 1][i] = 2
            A[i - 1][i + 1] = lambda[i]
        }

        if (this.is_natural) {
            A.map((row, i) => A[i] = row.slice(1, -1))
        }
        return A;
    }

    make_matrix_b() {
        let b = this.x_.slice(1, -1).map((num, i) => 6 * this.f([this.x_[i], num, this.x_[i + 2]]));
        return b
    }

    make_matrix_m() {
        let m = [];
        if (this.is_natural) {
            m = [0].concat(...solve(this.make_matrix_A(), this.make_matrix_b())).concat([0]);
        }
        return m
    }

    make_spline() {
        let spline = []
        let m = this.make_matrix_m()
        for (let i = 0; i < this.n; i++) {
            let q = (this.f([this.x_[i]]) - this.h[i + 1]**2 * m[i] / 6).toFixed(10);
            let p = (this.f([this.x_[i], this.x_[i + 1]]) + this.h[i + 1] * (m[i] - m[i + 1]) / 6).toFixed(10);
            let rule_i = new Polynomial("x").sub(this.x_[i]).pow(3).mul(m[i + 1] / (6 * this.h[i + 1]))
                .add(new Polynomial(`${this.x_[i + 1]}-x`).pow(3).mul(m[i] / (6 * this.h[i + 1])))
                .add(new Polynomial("x").sub(this.x_[i]).mul(p)).add(q);
            spline[i] = new Polynomial(rule_i.toString().replace(/\d+\.\d+(e-\d*)?/g, match =>
                parseFloat(match).toFixed(9).toString().replace(/\.0*$|(\.\d*[1-9])0+$/, '$1'))).toLatex();
        }
        let splineArr = Array.from(Array(this.n), () => new Array(2).fill(0))
        this.x_.slice(1).map((node, i) => {
            splineArr[i][0] = [this.x_[i], node]
            splineArr[i][1] = spline[i]
        })
        return splineArr;
    }

    getChartData() {
        let splineArr = this.make_spline()
        let xValues = [];
        let yValuesSpline = [];
        let yValuesF = [];
        let yValuesE = [];
        for (let i = +this.x_[0]; i <= +this.x_[this.n]; i = +((i + 0.01).toFixed(10))) {
            xValues.push(i);
            splineArr.every(row => {
                let limits = row[0];
                let rule = new Polynomial(row[1]);
                if (i >= limits[0] && i <= limits[1]) {
                    let temp1, temp2;
                    yValuesSpline.push(temp1 = rule.eval(i).toFixed(10));
                    yValuesF.push(temp2 = this.f([i]))
                    yValuesE.push(Math.abs(temp1 - temp2))
                    return false;
                }
                return true;
            })
        }
        let chartData = {
            labels: xValues,
            datasets: [{
                label: 'Cubic Spline',
                data: yValuesSpline,
                borderColor: '#FF6384',
                borderWidth: 1,
                pointRadius: 0

            }, {
                label: 'f',
                data: yValuesF,
                borderColor: '#36A2EB',
                borderWidth: 1,
                pointRadius: 0
            }, {
                label: 'e',
                data: yValuesE,
                borderColor: '#000000',
                borderWidth: 1,
                pointRadius: 0
            }]
        };

        if(!this.rule) {
            let dotChart = chartData.datasets.findIndex((chart) => chart.label=="f" || chart.label=="e");
            chartData.datasets[dotChart].pointRadius = 3;
        }

        return chartData;
    }

}

export { Issue }

let ms = new Issue([-1, 0, 1, 2], [1, 0, 1, 4]);
console.log(ms.make_spline());

