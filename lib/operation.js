const Fraction = require('./fraction')

module.exports = (args) => {
  //Attempt to serialize args 1 & 3 into "Fractions"
  operandOne = new Fraction(args._[0])
  operandTwo = new Fraction(args._[2])
  operator = args._[1]

  switch (operator) {
    case '+':
      add( operandOne, operandTwo )
      break
    case '-':
      subtract( operandOne, operandTwo )
      break
    case '/':
      divide( operandOne, operandTwo )
      break
    case '*':
    case 'x':
      multiply( operandOne, operandTwo )
      break
    default:
      break
  }
}

function add(x, y){

}

function subtract(x, y){

}

function multiply(x, y){
  var product = []

  product[0] = x.numerator * y.numerator
  product[1] = x.denominator * y.denominator

  product = new Fraction(product.join('/'))
  console.log (product)
}

function divide(x, y){

}
