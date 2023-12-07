const division = require('./division');

test('División de dos números', () => {
  expect(division(10, 2)).toBe(5.0);
  expect(division(25, 5)).toBe(5.0);
  expect(division(7, 3)).toBeCloseTo(2.33, 2);
});
