const Fraction = require('./fraction')

module.exports = (args) => {
  //Attempt to serialize args 1 & 3 into "Fractions"
  operandOne = new Fraction(args[0]).simplify()
  operandTwo = new Fraction(args[2]).simplify()

  operator = args[1]

  switch (operator) {
    case '+':
      return add( operandOne, operandTwo )
      break
    case '-':
      return subtract( operandOne, operandTwo )
      break
    case '/':
      return divide( operandOne, operandTwo )
      break
    case '*':
    case 'x':
      return multiply( operandOne, operandTwo )
      break
    default:
      break
  }
}

function add(x, y){
  var lcm = x.lcm(x.denominator, y.denominator)

  x = x.denominationOf( lcm )
  y = y.denominationOf( lcm )

  var numerator = x.numerator + y.numerator

  result = new Fraction(numerator + "/" + lcm)

  return result.simplify().mixed().string
}

function subtract(x, y){
  var lcm = x.lcm(x.denominator, y.denominator)

  x = x.denominationOf( lcm )
  y = y.denominationOf( lcm )

  var numerator = x.numerator - y.numerator

  result = new Fraction(numerator + "/" + lcm)

  return result.simplify().mixed().string
}

function multiply(x, y){
  var product = []

  product[0] = x.numerator * y.numerator
  product[1] = x.denominator * y.denominator

  product = new Fraction(product.join('/'))
  return product.simplify().mixed().string
}

function divide(x, y){
  y = y.reciprocal()
  return multiply(x, y)
}
