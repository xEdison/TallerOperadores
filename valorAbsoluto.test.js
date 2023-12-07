const valorAbsoluto = require('./valorAbsoluto');

test('Valor absoluto de un número', () => {
  expect(valorAbsoluto(5)).toBe(5);
  expect(valorAbsoluto(-3)).toBe(3);
  expect(valorAbsoluto(0)).toBe(0);
});
