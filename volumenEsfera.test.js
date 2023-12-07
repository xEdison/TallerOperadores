const volumenEsfera = require('./volumenEsfera');

test('Volumen de una esfera', () => {
  expect(volumenEsfera(5)).toBeCloseTo(523.60, 2);
  expect(volumenEsfera(2)).toBeCloseTo(33.51, 2);
  expect(volumenEsfera(8)).toBeCloseTo(2144.66, 2);
});
