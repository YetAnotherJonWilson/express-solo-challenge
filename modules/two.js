// Converts the parameter to USD

module.exports = function(val) {
  return '$' + val.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
