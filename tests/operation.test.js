const Operation = require('../lib/operation');

describe('Addition', () => {
  test('positive, non-mixed fractions', () => {
    expect(Operation([ '1/3', '+', '1/4' ])).toEqual('7/12');
    expect(Operation([ '3/8', '+', '1/6' ])).toEqual('13/24');
    expect(Operation([ '6/7', '+', '2/14' ])).toEqual('1');
    expect(Operation([ '6/7', '+', '9/14' ])).toEqual('1_1/2');
  });

  test('negative, improper fractions', () => {
    expect(Operation([ '9/5', '+', '-4/3' ])).toEqual('7/15');
    expect(Operation([ '-9/5', '+', '4/3' ])).toEqual('-7/15');
    expect(Operation([ '-9/5', '+', '-4/3' ])).toEqual('-3_2/15');
  });

  test('whole numbers', () => {
    expect(Operation([ '10', '+', '9' ])).toEqual('19');
    expect(Operation([ '-10', '+', '-6' ])).toEqual('-16');
    expect(Operation([ '-10', '+', '6' ])).toEqual('-4');
  });

  test('mixed fractions', () => {
    expect(Operation([ '2_1/5', '+', '1_3/4' ])).toEqual('3_19/20');
    expect(Operation([ '-2_1/5', '+', '1_3/4' ])).toEqual('-9/20');
    expect(Operation([ '2_1/5', '+', '-1_3/4' ])).toEqual('9/20');
    expect(Operation([ '-2_1/5', '+', '-1_3/4' ])).toEqual('-3_19/20');
  });

  test('improper fractions', () => {
    expect(Operation([ '-1/4', '+', '-9/5' ])).toEqual('-2_1/20');
  });

  test('zeros', () => {
    expect(Operation([ '0', '+', '1/2' ])).toEqual('1/2');
    expect(Operation([ '1/2', '+', '0' ])).toEqual('1/2');
    expect(Operation([ '0', '+', '2' ])).toEqual('2');
  });
});

describe('Subtraction', () => {
  test('positive, non-mixed fractions', () => {
    expect(Operation([ '1/3', '-', '1/4' ])).toEqual('1/12');
    expect(Operation([ '3/8', '-', '1/6' ])).toEqual('5/24');
    expect(Operation([ '6/7', '-', '2/14' ])).toEqual('5/7');
    expect(Operation([ '6/7', '-', '9/14' ])).toEqual('3/14');
  });

  test('negative, improper fractions', () => {
    expect(Operation([ '9/5', '-', '-4/3' ])).toEqual('3_2/15');
    expect(Operation([ '-9/5', '-', '4/3' ])).toEqual('-3_2/15');
    expect(Operation([ '-9/5', '-', '-4/3' ])).toEqual('-7/15');
  });

  test('whole numbers', () => {
    expect(Operation([ '10', '-', '9' ])).toEqual('1');
    expect(Operation([ '-10', '-', '-6' ])).toEqual('-4');
    expect(Operation([ '-10', '-', '6' ])).toEqual('-16');
  });

  test('mixed fractions', () => {
    expect(Operation([ '2_1/5', '-', '1_3/4' ])).toEqual('9/20');
    expect(Operation([ '-2_1/5', '-', '1_3/4' ])).toEqual('-3_19/20');
    expect(Operation([ '2_1/5', '-', '-1_3/4' ])).toEqual('3_19/20');
    expect(Operation([ '-2_1/5', '-', '-1_3/4' ])).toEqual('-9/20');
  });

  test('improper fractions', () => {
    expect(Operation([ '-1/4', '-', '-9/5' ])).toEqual('1_11/20');
  });

  test('zeros', () => {
    expect(Operation([ '0', '-', '1/2' ])).toEqual('-1/2');
    expect(Operation([ '1/2', '-', '0' ])).toEqual('1/2');
    expect(Operation([ '0', '-', '2' ])).toEqual('-2');
    expect(Operation([ '2', '-', '0' ])).toEqual('2');
  });
});

describe('Multiplication', () => {
  test('positive, non-mixed fractions', () => {
    expect(Operation([ '1/3', '*', '1/4' ])).toEqual('1/12');
    expect(Operation([ '3/8', '*', '1/6' ])).toEqual('1/16');
    expect(Operation([ '6/7', '*', '2/14' ])).toEqual('6/49');
    expect(Operation([ '6/7', '*', '9/14' ])).toEqual('27/49');
  });

  test('negative, improper fractions', () => {
    expect(Operation([ '9/5', '*', '-4/3' ])).toEqual('-2_2/5');
    expect(Operation([ '-9/5', '*', '4/3' ])).toEqual('-2_2/5');
    expect(Operation([ '-9/5', '*', '-4/3' ])).toEqual('2_2/5');
  });

  test('whole numbers', () => {
    expect(Operation([ '10', '*', '9' ])).toEqual('90');
    expect(Operation([ '-10', '*', '-6' ])).toEqual('60');
    expect(Operation([ '-10', '*', '6' ])).toEqual('-60');
  });

  test('mixed fractions', () => {
    expect(Operation([ '2_1/5', '*', '1_3/4' ])).toEqual('3_17/20');
    expect(Operation([ '-2_1/5', '*', '1_3/4' ])).toEqual('-3_17/20');
    expect(Operation([ '2_1/5', '*', '-1_3/4' ])).toEqual('-3_17/20');
    expect(Operation([ '-2_1/5', '*', '-1_3/4' ])).toEqual('3_17/20');
  });

  test('improper fractions', () => {
    expect(Operation([ '-1/4', '*', '-9/5' ])).toEqual('9/20');
  });

  test('zeros', () => {
    expect(Operation([ '0', '*', '1/2' ])).toEqual('0');
    expect(Operation([ '3_1/2', '*', '0' ])).toEqual('0');
  });
});

describe('Division', () => {
  test('positive, non-mixed fractions', () => {
    expect(Operation([ '1/3', '/', '1/4' ])).toEqual('1_1/3');
    expect(Operation([ '3/8', '/', '1/6' ])).toEqual('2_1/4');
    expect(Operation([ '6/7', '/', '2/14' ])).toEqual('6');
    expect(Operation([ '6/7', '/', '9/14' ])).toEqual('1_1/3');
  });

  test('negative, improper fractions', () => {
    expect(Operation([ '9/5', '/', '-4/3' ])).toEqual('-1_7/20');
    expect(Operation([ '-9/5', '/', '4/3' ])).toEqual('-1_7/20');
    expect(Operation([ '-9/5', '/', '-4/3' ])).toEqual('1_7/20');
  });

  test('whole numbers', () => {
    expect(Operation([ '-10', '/', '6' ])).toEqual('-1_2/3');
    expect(Operation([ '-10', '/', '-5' ])).toEqual('2');
    expect(Operation([ '5', '/', '10' ])).toEqual('1/2');
    expect(Operation([ '5', '/', '-10' ])).toEqual('-1/2');
  });

  test('mixed fractions', () => {
    expect(Operation([ '2_1/5', '/', '1_3/4' ])).toEqual('1_9/35');
    expect(Operation([ '-2_1/5', '/', '1_3/4' ])).toEqual('-1_9/35');
    expect(Operation([ '2_1/5', '/', '-1_3/4' ])).toEqual('-1_9/35');
    expect(Operation([ '-2_1/5', '/', '-1_3/4' ])).toEqual('1_9/35');
  });

  test('improper fractions', () => {
    expect(Operation([ '-1/4', '/', '-9/5' ])).toEqual('5/36');
  });

  test('zeros', () => {
    expect(Operation([ '0', '/', '1/2' ])).toEqual('0');
    expect(Operation([ '3_1/2', '/', '0' ])).toEqual(NaN);
  });
});


//Test with 0 operations in multiplication and division esp.
