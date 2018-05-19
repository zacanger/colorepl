const repl = require('repl')
const { colorize } = require('zeelib')

const prompt = colorize.bold(colorize.magenta('=> '))

module.exports = () => {
  repl.start({ prompt })
}
