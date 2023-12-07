const factorial = require('./factorial');

test('Factorial de un número', () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(0)).toBe(1);
  expect(factorial(10)).toBe(3628800);
});
