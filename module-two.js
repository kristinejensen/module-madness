

function dollarConvert(number) {
  // code will convert # to US $ and return that new string
  var converter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  return converter.format(number);
}

module.exports = {
  convert: dollarConvert
}
