var randomNumberFunction = require('./module-one.js')
var dollarConvertFunction = require('./module-two.js')

function randomDollarAmount() {
 return dollarConvertFunction.convert(randomNumberFunction.random(100, 1000000));
}

function stringReturn() {
  return "Account Balance:\n"
}

module.exports = {
  final: randomDollarAmount,
  string: stringReturn
}
