function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}
if (typeof exports === 'object') {
    module.exports = {sum, divide, multiply}
}
