const areaTriangulo = require('./areaTriangulo');

test('Área de un triángulo', () => {
  expect(areaTriangulo(5, 4)).toBe(10.0);
  expect(areaTriangulo(8, 6)).toBe(24.0);
  expect(areaTriangulo(3, 7)).toBe(10.5);
});
