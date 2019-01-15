const Fraction = require('../lib/fraction');

test('Fraction is a class', () => {
  expect(typeof Fraction.prototype.constructor).toEqual('function');
});

//All methods
