const fs = require('fs');
const {
  calcFuelFor,
  calcTotalFuelFor,
} = require('./fuel-calculators');

const input = fs.readFileSync('./src/day01.data', 'utf8');

module.exports = {
  part1,
  part2,
};

function part1() {
  return input
    .trim()
    .split('\n')
    .reduce((acc, mass) => acc + calcFuelFor(parseInt(mass)), 0);
}

function part2() {
  return input
    .trim()
    .split('\n')
    .reduce((acc, mass) => acc + calcTotalFuelFor(parseInt(mass)), 0);
}
