import matrix from "matrix-js"
import Polynomial from "polynomial"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv());
    return A_inv.prod(b);
}

class Issue {
    constructor(rule, x_, is_natural = true) {
        this.is_natural = is_natural
        this.rule = rule;
        this.x_ = x_;
        this.n = x_.length - 1;
        this.h = x_.slice(1).map((num, i) => num - x_[i]);
        this.h.unshift(NaN);
    }

    f(x) {
        if (x.length > 1) {
            return (this.f(x.slice(1)) - this.f(x.slice(0, -1))) / (x[x.length - 1] - x[0]);
        }
        // else return eval(rule);
        else {
            if (x == -1) return 1
            if (x == 0) return 0
            if (x == 1) return -1
            if (x == 2) return 4
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
            let q = this.f(this.x_[i]) - this.h[i + 1] * m[i] / 6;
            let p = this.f([this.x_[i], this.x_[i + 1]]) + this.h[i + 1] * (m[i] - m[i + 1]) / 6;
            let rule_i = new Polynomial("x").sub(this.x_[i]).pow(3).mul(m[i + 1] / (6 * this.h[i + 1]))
                .add(new Polynomial(`${this.x_[i + 1]}-x`).pow(3).mul(m[i] / (6 * this.h[i + 1])))
                .add(new Polynomial("x").sub(this.x_[i]).mul(p)).add(q);
            spline[i] = rule_i.toString();
        }
        // return spline
        let splineArr = Array.from(Array(this.n), () => new Array(2).fill(0))
        this.x_.slice(1).map((node, i) => {
            splineArr[i][0] = [this.x_[i], node]
            splineArr[i][1] = spline[i]
        })
        return splineArr;
    }
}

export { Issue }