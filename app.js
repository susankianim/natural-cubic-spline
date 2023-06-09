import { Issue } from "./spline.js";
import { Chart } from "chart.js/auto";

function convertPolynomialToHTML(polynomial) {
    // return polynomial.replaceAll(/(\^)(\d+)/g, "<sup><small>$2</small></sup>")
    return `\\(${polynomial}\\)`;
}

function convertLimitToHTML(limit) {
    let start = limit[0];
    let end = limit[1];
    return `\\(${start} ≤ x ≤ ${end}\\)`;
}

function convertRuleToHTML(rule) {
    let lHTML = convertLimitToHTML(rule[0])
    let pHTML = convertPolynomialToHTML(rule[1])
    return `${pHTML}&emsp;&emsp;${lHTML}`
}

function convertSplineToHTML(splineArr) {
    let ruleArr = splineArr.map(rule => convertRuleToHTML(rule))
    return ruleArr.join("<br>")
}

export { convertSplineToHTML}
function solve({knownXs, functionRule, knownValues}) {
    try {
        console.log({knownXs, functionRule, knownValues});
        let x_ = [...new Set((knownXs).match(/-?\d+\.?\d*/g).map(Number))];
        let rule = functionRule;
        let myIssue;
        if(rule) {
            x_ = x_.sort((a, b) => a - b);
            myIssue = new Issue(x_, null, rule);
        } else {
            let values = (knownValues).match(/-?\d+\.?\d*/g).map(Number)
            let points = x_.map((x, i) => [x, values[i]]);
            x_ = x_.sort((a, b) => a - b);
            values = points.sort((a, b) => a[0] - b[0]).map(x => x[1]);
            myIssue = new Issue(x_, values, null);
        }
        let mySpline = myIssue.make_spline();
        let mySplineStr = convertSplineToHTML(mySpline);

        let chartData = myIssue.getChartData();
        
        return {mySplineStr, chartData};
    } catch (e) {
        console.log(e);
    }

}

function update({mySplineStr, chartData}) {
    try {
        let chartStatus = Chart.getChart("myChart");
        if (chartStatus) {
            chartStatus.destroy();
        }
        let splineContainer = document.getElementById("spline-container");
        splineContainer.innerHTML = mySplineStr;

        let canvas = document.getElementById("myChart");
        let myChart = new Chart(canvas, { type: "line", data: chartData });
        myChart.update();
        MathJax.typeset();
    } catch(e) {
        console.log(e);
    }
}

window.addEventListener("load", event => {
    let form = document.querySelector("#frmMain");
    form.addEventListener("submit", (event) => {
        try {
            let knownXs = form.knownXs.value;
            let functionRule = form.functionRule.value;
            let knownValues = form.knownValues.value;
            let {mySplineStr, chartData} = solve({knownXs, functionRule, knownValues});
            update({mySplineStr, chartData})
        } catch (e) {
            console.log(e);
        }
    });
});
