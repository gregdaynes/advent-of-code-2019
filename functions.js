module.exports = {
  calcFuelFor,
}

function calcFuelFor(mass) {
  return Math.floor(mass / 3) - 2;
}
