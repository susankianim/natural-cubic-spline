import { Issue } from "./spline.js";
import { convertSplineToHTML } from "./toHTML.js"
import { Chart } from "chart.js/auto";


function solve(form) {
    try {
        let chartStatus = Chart.getChart("myChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        let rule = form.functionRule.value;
        let x_ = (form.knownXs.value).split(" ");
        let myIssue = new Issue(rule, x_)
        let mySpline = myIssue.make_spline();
        let mySplineStr = convertSplineToHTML(mySpline);

        let splineContainer = document.getElementById('spline-container');
        splineContainer.innerHTML = mySplineStr;

        let chartData = myIssue.getChartData();
        let canvas = document.getElementById('myChart');
        let myChart = new Chart(canvas, { type: 'line', data: chartData });
        myChart.update();
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
