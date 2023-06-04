import matrix from "matrix-js"
import Polynomial from "polynomial"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv());
    return A_inv.prod(b)
}

let rule = "x ** 2";
let is_natural = true

function f(x) {
    if (x.length > 1) {
        return (f(x.slice(1)) - f(x.slice(0, -1)))/(x[x.length - 1] - x[0]);
    }
    // else return eval(rule);
    else {
        if (x == 1) return -1
        else {return x**2}
    }
}

let x_ = [-1, 0, 1, 2];
let values = x_.map(x => f(x))

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

let b = x_.slice(1, -1).map((num, i) => 6 * f([x_[i], num, x_[i + 2]]))


let m = [0].concat(...solve(A, b)).concat([0]);



// let A1 = [[1, 1, -3 , 1], [-5, 3, -4, 1], [1, 0, 2, -1], [1,  2, 0, 0]]
// let b1 = [2*17, 0, 1*17, 12*17]
// // console.log(new Polynomial("+1").pow(3).toString());

// let A2 = [ [ 25, 2, 75, 0 ], [ 0, 5, 2, 5 ] ]
// let b2 = [2*17, 0]

// // console.log(A);
// // console.log(b);
// // console.log(A1);
// // console.log(b1);
// console.log(solve(A1, b1));
// console.log(solve(A2, b2));


