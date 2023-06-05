import { Issue } from "./spline.js";
import { convertSplineToHTML } from "./toHTML.js"


let myIssue = new Issue("x + 1", [-1, 0, 1, 2])
let mySpline = myIssue.make_spline();
let mySplineStr = convertSplineToHTML(mySpline)
// console.log(mySplineStr);


