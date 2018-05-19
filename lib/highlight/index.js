const q = require('./iq')
const hl = require('./javascript')

module.exports = (input) => {
  const line = input.toString()
  const l = q(line)
  hl(l)
  process.stdout.write(l.apply() + '\n')
}
