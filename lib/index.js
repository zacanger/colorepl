const repl = require('repl')
const { colorize } = require('zeelib')
const highlight = require('./highlight')

const foo = (cmd, context, filename, callback) => {
  callback(null, highlight(cmd))
}
const prompt = colorize.bold(colorize.magenta('=> '))

module.exports = () => {
  repl.start({ prompt, useColors: true /* , eval: foo */ /* , writer: highlight */ })
}
