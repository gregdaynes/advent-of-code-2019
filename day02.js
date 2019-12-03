const fs = require('fs');

const {
  compute,
  prepareIntcode,
} = require('./ship-computer');

function replaceIntcodePoints(input, replacements) {
  const intcode = prepareIntcode(input);

  replacements.forEach((replacement) => {
    intcode[replacement[0]] = replacement[1];
  });

  return intcode;
}

function puzzle1() {
  const input = fs.readFileSync('./day02.data', 'utf8');
  const newIntcode = replaceIntcodePoints(input, [[1, 12], [2, 2]]);

  return compute(newIntcode)[0];
}
console.log(puzzle1(), puzzle1() === 3166704);
