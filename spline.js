import matrix from "matrix-js"

function solve(A, b) {
    A = matrix(A);
    b = matrix(matrix(b).map(x => [x]));
    let A_inv = matrix(A.inv())
    return A_inv.prod(b)
}

let A = [[1, 1, -3 , 1], [-5, 3, -4, 1], [1, 0, 2, -1], [1,  2, 0, 0]]
let b = [2*17, 0, 1*17, 12*17]
console.log(solve(A, b));

