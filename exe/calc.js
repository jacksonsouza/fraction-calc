const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const operator = args._[1]

  switch (operator) {
    case '+':
    case '-':
    case '/':
    case '*':
    case 'x':
      console.log(require('../lib/operation')(args))
      break
    default:
      console.error(`"${operator}" is not a valid operator. Please run set -f before attempting multiplication operations to prevent the shell from misreading the asterix.`)
      break
  }
}
