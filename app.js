//
// var randomNumber = require('./module-one.js')
// var min = 100;
// var max = 1000000;
// console.log(randomNumber.random(min, max));
//
//
// var dollarConvert = require('./module-two.js')
// var number = 16;
// console.log(dollarConvert.convert(number));


var moduleThree = require('./module-three.js')
var accountBalance = moduleThree.string();
var dollarTotal = moduleThree.final();

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(accountBalance + dollarTotal);
  res.end();
}).listen(3000);
