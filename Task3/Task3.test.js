const Calc = require('./Task3.js');

const calc = new Calc;

// Test add function

test('Sums 1+1', () => {
    expect(calc.add(1, 1)).toBe(2);
    });

test('Sums 45+55', () => {
    expect(calc.add(45, 55)).toBe(100);
    });

test('Throws error when trying to add negative values ', () => {
    expect(() => calc.add(1, -1)).toThrowError('Negative numbers not allowed');
    });

// Test subtract function

test('Subtracts 1-1', () => {
    expect(calc.subtract(1, 1)).toBe(0);
    });

test('Subtracts 55-45', () => {
    expect(calc.subtract(55, 45)).toBe(10);
    });

test('Throws error when trying to subtract negative values ', () => {
    expect(() => calc.subtract(1, -1)).toThrowError('Negative numbers not allowed');
    });

// Test multiply function

test('Multiplies 1*1', () => {
    expect(calc.multiply(1, 1)).toBe(1);
    });

test('Multiplies 45*55', () => {
    expect(calc.multiply(45, 55)).toBe(2475);
    });

// Test divide function

test('Divides 1/1', () => {
    expect(calc.divide(1, 1)).toBe(1);
    });

test('Divides 45/55', () => {
    expect(calc.divide(45, 55)).toBe(0.8181818181818182);
    });

test('Throws error when trying to divide by zero ', () => {
    expect(() => calc.divide(1, 0)).toThrowError('Division by zero not allowed');
    });