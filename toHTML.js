function convertPolynomialToHTML(polynomial) {
    return polynomial.replaceAll(/(\^)(\d+)/g, "<sup><small>$2</small></sup>")
}

function convertLimitToHTML(limit) {
    let start = limit[0];
    let end = limit[1];
    return `${start} ≤ x ≤ ${end}`
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