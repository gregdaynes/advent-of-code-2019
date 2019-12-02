const fs = require('fs');
const {
  calcFuelFor,
  calcFuelForInclusive,
  calcTotalFuelFor,
} = require('./functions');

const input = fs.readFileSync('./input.data', 'utf8')

const answerP1 = input
  .trim()
  .split("\n")
  .reduce((acc, mass) => {
    return acc + calcFuelFor(parseInt(mass));
  }, 0);
console.log('Answer D01-P01', answerP1);

const answerP2 = input
  .trim()
  .split("\n")
  .reduce((acc, mass) => {
    return acc + calcTotalFuelFor(parseInt(mass))
  }, 0);
console.log('Answer D01-P02', answerP2);
