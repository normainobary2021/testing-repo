class Calculator {
    add(a, b) {
        if(b<0){
            throw new Error('Negative numbers not allowed');
        }
        return a + b;
    }

    subtract(a, b) {
        if(b<0){
            throw new Error('Negative numbers not allowed');
        }
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if(b === 0){
            throw new Error('Division by zero not allowed');
        }
        return a / b;
    }
}

module.exports = Calculator;