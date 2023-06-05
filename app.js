import { Issue } from "./spline.js";
import { convertPolynomialToHTML } from "./script.js";
import { convertLimitToHTML } from "./script.js"
import { convertRuleToHTML } from "./script.js"
import { convertSplineToHTML } from "./script.js"


let my_issue = new Issue("x + 1", [-1, 0, 1, 2])
let my_spline = my_issue.make_spline();
// console.log(my_spline);
// console.log(convertLimitToHTML(my_spline[0][0]));
// console.log(convertPolynomialToHTML(my_spline[0][1]));
// console.log(convertRuleToHTML(my_spline[0]));
// console.log(convertSplineToHTML(my_spline));

let str = "-3x^2+4x-80"
let arr = str.split(/(?=[\+\-])/)
console.log(arr);
const pattern = /(^-?\d*\.{0,1}\d+$)([a-zA-Z])(\^)(\d+)/;
console.log(arr[0].match(pattern));

