const reverseString = require('./Task2.js');
const testVar = 'helloworld';

test('Reversed String to be equal to', () => {
    expect(reverseString(testVar)).toBe('dlrowolleh');
});