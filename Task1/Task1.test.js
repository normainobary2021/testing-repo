const stringLength = require('./Task1.js'); 
const testVar = 'helloworld';

test('String Length equal to 10', () => {
    expect(stringLength(testVar)).toBe(10);
});

test('String Length to be greater than 0 and less than 11', () => {
    expect(stringLength(testVar)).toBeGreaterThanOrEqual(1);
    expect(stringLength(testVar)).toBeLessThanOrEqual(10);
});
