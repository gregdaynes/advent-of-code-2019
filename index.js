const fs = require('fs');
const {
  calcFuelFor,
} = require('./functions');

const input = fs.readFileSync('./input.data', 'utf8')

const answerP1 = input
  .trim()
  .split("\n")
  .reduce((acc, mass) => {
    return acc + calcFuelFor(parseInt(mass));
  }, 0);
console.log('Answer D01-P01', answerP1);
