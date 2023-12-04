const math = require("../../src/js/math");
const test = require('@jest/globals').test
const expect = require('@jest/globals').expect

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});
test('multiply 1 * 2 to equal 2', () => {
    expect(math.multiply(1, 2)).toBe(2);
});
test('divide 1 / 2 to equal 0.5', () => {
    expect(math.divide(1, 2)).toBe(0.5);
});