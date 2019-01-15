module.exports = () => {
  const args = process.argv.slice(2)
  const operator = args[1]

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
