function convertPolynomialToHTML(polynomial) {
    // let terms = polynomial.split(/[\+\-]/);
    let terms = polynomial.split(/(?=[\+\-])/);
    
    const pattern = /([a-zA-Z])(\^)(\d+)/;

    let htmlTerms = terms.map(term => {
        let matches = term.match(pattern);
        if (term.match(pattern)) {
            let variable = matches[1];
            let exponent = matches[3];
            return `${variable}<sup><small>${exponent}</small></sup>`;
        }
        return term;
    });

    const htmlString = htmlTerms.join("+");
    return htmlTerms.join("+");
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

export { convertPolynomialToHTML }
export { convertLimitToHTML}
export { convertRuleToHTML}
export { convertSplineToHTML}