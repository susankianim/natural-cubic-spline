// // import Decimal from "decimal.js";
import Polynomial from "polynomial";



// // let x = new Decimal(1.4)
// // let y = new Decimal(3)
// // console.log(x.times(y));
// // let px = new Polynomial(`${x}x`)
// // let py = new Polynomial(`${y}x`)
// // console.log(px.mul(py));
// // let p = "2.334x^3+5x^2-4.7890"

// // function addad(a) {
// //     console.log(a);
// //     return((a))
// // }

// // console.log(p.replace(/([0-9\.]+)/g,addad("$1")));
// // console.log(p.replace(/\d+\.\d+/g, match => parseFloat(match).toFixed(2)));
// // let x = parseFloat("2.22222")
// // console.log(x.toFixed(3));

// // let p = new Polynomial("x^2")
// // console.log(p.eval(1.1));

// let splineArr = [
//     [ [ -1, 0 ], '-0.4x^3-1.2x^2-1.8x' ],
//     [ [ 0, 1 ], '2x^3-1.2x^2-1.8x' ],
//     [ [ 1, 2 ], '-1.6x^3+9.6x^2-12.6x+3.6' ]
//   ]
// let x_ = [-1, 0, 1, 2]
// let n = x_.length - 1
// let xValues = []
// let yValues = []
// for (let i = x_[0]; i < x_[n]; i += 0.01) {
//     xValues.push(i);
//     splineArr.forEach(row => {
//         let limits = row[0];
//         let rule = new Polynomial(row[1]);
//         if (i >= limits[0] && i <= limits[1]) {
//             yValues.push(rule.eval(i).toFixed(2));
//             return;
//         }
//     })
// }

// console.log(yValues);

// let p = new Polynomial('x^2');
// console.log(p.eval(-1.9));
// let rule = "x**2"
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let x = i
//     arr.push(eval(rule))
// }
// console.log(arr);

// console.log(typeof x);
try {
    if (typeof x === 'undefined') {console.log("no");}
    let x = 3;
} catch (error) {
    
}