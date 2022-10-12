function operate(operation, ...argmnts) {
    function sum(...args) {
        let sum = 0;
        args.forEach(function (element) {
            sum += element;
        })
        return sum;
    }

    function multiply(...args) {
        let product = 1;
        args.forEach(function (element) {
            product *= element;
        })
        return product;
    }

    function root(arg) {
        return Math.sqrt(arg);
    }

    function isOdd(arg) {
        return arg % 2 === 0;
    }

    if (operation === '+' || operation === 'add') {
        return sum(...argmnts)
    }
    if (operation === '*' || operation === 'multiply') {
        return multiply(...argmnts)
    }
    if (operation === 'root') {
        if (argmnts.length === 1) return root(argmnts[0])
        return argmnts.map(function (arg) {
            return root(arg)
        })
    }
    if (operation === 'odd') {
        return isOdd(argmnts[0])
    }
}