module.exports = () => {
  const args = process.argv.slice(2)
  var operator = args[1]

  if (args.length > 3){ operator = false }

  switch (operator) {
    case '+':
    case '-':
    case '/':
    case '*':
    case 'x':
      console.log(require('../lib/operation')(args))
      break
    default:
      console.error(`"${operator}" is not a valid operator.`)
      break
  }
}
