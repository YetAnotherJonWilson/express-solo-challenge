// Creates a random number between the min(inclusive) and max (exclusive) parameters

module.exports = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
