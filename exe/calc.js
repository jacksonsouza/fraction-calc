const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const operator = args._[1]

  switch (operator) {
    case '+':
    case '-':
    case '/':
    case '*':
      require('../lib/operation')(args)
      break
    default:
      console.error(`"${operator}" is not a valid operator.`)
      break
  }
}
