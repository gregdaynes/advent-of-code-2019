module.exports = {
  calcFuelFor,
  calcFuelForInclusive,
  calcTotalFuelFor,
}

function calcFuelFor(mass) {
  return Math.floor(mass / 3) - 2;
}

function calcFuelForInclusive(mass) {
  const fuelMass = calcFuelFor(mass);
  return (fuelMass <= 0) ? mass : mass + calcFuelForInclusive(fuelMass);
}

function calcTotalFuelFor(mass) {
  const totalMassInclusive = calcFuelForInclusive(mass);
  return totalFuelMass = totalMassInclusive - mass;
}
