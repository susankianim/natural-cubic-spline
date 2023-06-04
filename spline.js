import matrix from "matrix-js"
import Polynomial from "polynomial"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv());
    return A_inv.prod(b)
}

let is_natural = true
let rule = "x ** 2";
let x_ = [-1, 0, 1, 2];

let n = x_.length - 1;
let h = x_.slice(1).map((num, i) => num - x_[i]);
h.unshift(NaN);
let mu = h.slice(1).map((num, i) => h[i] / (num + h[i]));
let lambda = mu.map(x => 1 - x);

let A = Array.from(Array(n - 1), () => new Array(n + 1).fill(0))
for (let i = 1; i < n; i++) {
    A[i - 1][i - 1] = mu[i]
    A[i - 1][i] = 2
    A[i - 1][i + 1] = lambda[i]
}

if (is_natural) {
    A.map((row, i) => A[i] = row.slice(1, -1))
}

function f(x) {
    if (x.length > 1) {
        return (f(x.slice(1)) - f(x.slice(0, -1)))/(x[x.length - 1] - x[0]);
    }
    // else return eval(rule);
    else {
        if (x == -1) return 1
        if (x == 0) return 0
        if (x == 1) return -1
        if (x == 2) return 4
    }
}

let b = x_.slice(1, -1).map((num, i) => 6 * f([x_[i], num, x_[i + 2]]));

let m = [];
if (is_natural) {
    m = [0].concat(...solve(A, b)).concat([0]);
}

let spline = []
for (let i = 0; i < n; i++) {
    let q = f(x_[i]) - h[i + 1] * m[i] / 6;
    let p = f([x_[i], x_[i + 1]]) + h[i + 1] * (m[i] - m[i + 1]) / 6;
    let rule_i = new Polynomial("x").sub(x_[i]).pow(3).mul(m[i + 1] / (6 * h[i + 1]))
        .add(new Polynomial(`${x_[i + 1]}-x`).pow(3).mul(m[i] / (6 * h[i + 1])))
        .add(new Polynomial("x").sub(x_[i]).mul(p)).add(q);
    spline[i] = rule_i.toString();
}
console.log(spline);
