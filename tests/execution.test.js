const exec = require('child_process').exec;

describe('Good input strings', () => {
  test('Basic addition', () => {
    var cmd = 'calc 2 + 4',
        str = "6";

    exec(cmd, function(err, stdout, stderr){
      expect(stdout.includes(str)).toEqual(true)
    })
  });

  test('Many spaces', () => {
    var cmd = 'calc    2                +  4',
        str = "6";

    exec(cmd, function(err, stdout, stderr){
      expect(stdout.includes(str)).toEqual(true)
    })
  });
});

describe('Bad input strings', () => {
  test('Random string operand', () => {
    var cmd = 'calc 2 + adfsdf',
        errStr = "\"adfsdf\" is not a valid fraction string.";

    exec(cmd, function(err, stdout, stderr){
      expect(stderr.includes(errStr)).toEqual(true)
    })
  });

  test('Random string operator', () => {
    var cmd = 'calc 2 & 4',
        errStr = "\"undefined\" is not a valid operator.";

    exec(cmd, function(err, stdout, stderr){
      expect(stderr.includes(errStr)).toEqual(true)
    })
  });

  test('Random string', () => {
    var cmd = 'calc hshdb',
        errStr = "\"undefined\" is not a valid operator.";

    exec(cmd, function(err, stdout, stderr){
      expect(stderr.includes(errStr)).toEqual(true)
    })
  });

  test('No arguments', () => {
    var cmd = 'calc hshdb',
        errStr = "\"undefined\" is not a valid operator.";

    exec(cmd, function(err, stdout, stderr){
      expect(stderr.includes(errStr)).toEqual(true)
    })
  });
});
