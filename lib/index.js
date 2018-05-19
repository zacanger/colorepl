const repl = require('repl')
const { colorize } = require('zeelib')
const highlight = require('./highlight')

const prompt = colorize.bold(colorize.magenta('=> '))

module.exports = () => {
  repl.start({ prompt, useColors: true, writer: highlight })
}
