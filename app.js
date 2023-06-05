import { Issue } from "./spline.js";
import { convertSplineToHTML } from "./toHTML.js"

function solve(form) {
    try {
        let rule = form.functionRule.value;
        let x_ = (form.knownXs.value).split(" ");
        let myIssue = new Issue(rule, x_)
        let mySpline = myIssue.make_spline();
        let mySplineStr = convertSplineToHTML(mySpline);
        
        const splineContainer = document.getElementById('spline-container');
        splineContainer.innerHTML = mySplineStr;
        // alert("You typed: " + x_);
    } catch (e) {
        console.log(e);
    }

}

window.addEventListener("load", event => {
    document.querySelector("#btnSubmit").addEventListener("click", (event) => {
        try {
            let form = document.querySelector("#frmMain");
            solve(form);
        } catch (e) {
            console.log(e);
        }
    });
});
