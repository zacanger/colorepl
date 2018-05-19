/* eslint-disable */

// case sensitive
const cs = (a) => new RegExp(`\\b(${a.join('|')})\\b`, 'g')
// case insensitive
const ci = (a) => new RegExp(`\\b(${a.join('|')})\\b`, 'gi')

let styles = {
  // styles
  'bold'      : ['\033[1m' , '\033[22m']
, 'italic'    : ['\033[3m' , '\033[23m']
, 'underline' : ['\033[4m' , '\033[24m']
, 'inverse'   : ['\033[7m' , '\033[27m']

  // grayscale
, 'white'     : ['\033[37m' , '\033[39m']
, 'grey'      : ['\033[90m' , '\033[39m']
, 'black'     : ['\033[30m' , '\033[39m']

  // colors
, 'blue'      : ['\033[34m' , '\033[39m']
, 'cyan'      : ['\033[36m' , '\033[39m']
, 'green'     : ['\033[32m' , '\033[39m']
, 'magenta'   : ['\033[35m' , '\033[39m']
, 'red'       : ['\033[31m' , '\033[39m']
, 'yellow'    : ['\033[33m' , '\033[39m']
}

'white,grey,black,blue,cyan,green,magenta,red,yellow'
.split(',').forEach(c => {

  let
    start = styles.bold[0]
  , end   = styles.bold[1]
  , name  = 'bright' + c.charAt(0).toUpperCase() + c.substring(1)

  styles[name] = [start + styles[c][0], styles[c][1] + end]
})

const
  rbrace  = /[\(\)]/g
, sbrace  = /[\[\]]/g
, cbrace  = /[\{\}]/g
, number  = /-?\d+(?:\.\d+)?(?:e-?\d+)?/g
, string  = /('[^']*')|("[^"]*")|(`[^`]*`)/g
, comment = /\/\/[^\n]*/g
, kList   = [
  'as'
, 'async'
, 'await'
, 'break'
, 'case'
, 'catch'
, 'class'
, 'console'
, 'const'
, 'continue'
, 'debugger'
, 'default'
, 'delete'
, 'do'
, 'else'
, 'enum'
, 'export'
, 'extends'
, 'finally'
, 'for'
, 'from'
, 'function'
, 'if'
, 'implements'
, 'import'
, 'in'
, 'instanceof'
, 'interface'
, 'let'
, 'module'
, 'new'
, 'package'
, 'private'
, 'protected'
, 'public'
, 'require'
, 'return'
, 'static'
, 'super'
, 'switch'
, 'this'
, 'throw'
, 'try'
, 'typeof'
, 'var'
, 'void'
, 'while'
, 'with'
, 'yield'
]
, pList   = [
  'Array'
, 'ArrayBuffer'
, 'Boolean'
, 'DataView'
, 'Date'
, 'Error'
, 'EvalError'
, 'Float32Array'
, 'Float64Array'
, 'Function'
, 'Infinity'
, 'Int16Array'
, 'Int32Array'
, 'Int8Array'
, 'Intl'
, 'JSON'
, 'Map'
, 'Math'
, 'NaN'
, 'Number'
, 'Object'
, 'Promise'
, 'Proxy'
, 'RangeError'
, 'ReferenceError'
, 'Reflect'
, 'RegExp'
, 'Set'
, 'String'
, 'Symbol'
, 'SyntaxError'
, 'TypeError'
, 'URIError'
, 'Uint16Array'
, 'Uint32Array'
, 'Uint8Array'
, 'Uint8ClampedArray'
, 'WeakMap'
, 'WeakSet'
, 'arguments'
, 'clearInterval'
, 'clearTimeout'
, 'constructor'
, 'decodeURI'
, 'document'
, 'element'
, 'encodeURI'
, 'encodeURIComponent'
, 'escape'
, 'eval'
, 'false'
, 'global'
, 'isFinite'
, 'isNaN'
, 'isPrototypeOf'
, 'null'
, 'parseFloat'
, 'parseInt'
, 'prototype'
, 'setInterval'
, 'setTimeout'
, 'toString'
, 'true'
, 'undefined'
, 'unescape'
, 'valueOf'
, 'window'
]
, keyword = cs(kList)
, prim    = cs(pList)

module.exports = q => {
  q.wrap(rbrace  , styles.brightCyan)
  q.wrap(sbrace  , styles.brightYellow)
  q.wrap(cbrace  , styles.brightGreen)
  q.wrap(number  , styles.brightMagenta)
  q.wrap(prim    , styles.magenta)
  q.wrap(keyword , styles.brightBlue)
  q.wrap(comment , styles.grey)
  q.wrap(string  , styles.red)
}
