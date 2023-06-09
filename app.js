import { Issue } from "./spline.js";
import { convertSplineToHTML } from "./toHTML.js"
import { Chart } from "chart.js/auto";


function solve(form) {
    try {
        let chartStatus = Chart.getChart("myChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        let x_ = [...new Set((form.knownXs.value).match(/-?\d+\.?\d*/g).map(Number))];
        let rule = form.functionRule.value;
        let myIssue;
        if(rule) {
            x_ = x_.sort((a, b) => a - b);
            myIssue = new Issue(x_, null, rule);
        } else {
            let values = (form.knownValues.value).match(/-?\d+\.?\d*/g).map(Number)
            let points = x_.map((x, i) => [x, values[i]]);
            x_ = x_.sort((a, b) => a - b);
            values = points.sort((a, b) => a[0] - b[0]).map(x => x[1]);
            myIssue = new Issue(x_, values, null);
        }
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
