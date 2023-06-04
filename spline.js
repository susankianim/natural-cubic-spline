import matrix from "matrix-js"
import Polynomial from "polynomial"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv())
    return A_inv.prod(b)
}

function rule(x) {return x**2}

function f(x) {
    if (x.length > 1) {
        return (f(x.slice(1)) - f(x.slice(0, -1)))/(x[x.length - 1] - x[0])
    }
    else return rule(x)
}

let nodes = [1, 2, 5, 8, 9]
let n = nodes.length
let h = nodes.slice(1).map((num, i) => num - nodes[i]);
h.unshift(NaN)
let mu = h.slice(1).map((num, i) => h[i] / (num + h[i]));
let lambda = mu.map(x => 1 - x);






// let A = [[1, 1, -3 , 1], [-5, 3, -4, 1], [1, 0, 2, -1], [1,  2, 0, 0]]
// let b = [2*17, 0, 1*17, 12*17]
// console.log(solve(A, b));
// console.log(new Polynomial("+1").pow(3).toString());




