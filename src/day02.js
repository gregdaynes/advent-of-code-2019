const fs = require('fs');

const {
  compute,
  prepareIntcode,
} = require('./ship-computer');

module.exports = {
  part1,
  part2,
};

function replaceIntcodePoints(input, replacements) {
  const intcode = prepareIntcode(input);

  replacements.forEach((replacement) => {
    intcode[replacement[0]] = replacement[1];
  });

  return intcode;
}

function part1() {
  const input = fs.readFileSync('./src/day02.data', 'utf8');
  const newIntcode = replaceIntcodePoints(input, [[1, 12], [2, 2]]);

  return compute(newIntcode)[0];
}

function part2() {
  const input = fs.readFileSync('./src/day02.data', 'utf8');

  let foundNoun;
  let foundVerb;

  for (let noun = 0; noun < 100; noun += 1) {
    for (let verb = 0; verb < 100; verb += 1) {
      const tempInput = input.slice(0);
      const newIntcode = replaceIntcodePoints(tempInput, [[1, noun], [2, verb]]);
      const output = compute(newIntcode)[0];

      if (output === 19690720) {
        foundNoun = noun;
        foundVerb = verb;
        break;
      }
    }
  }

  return 100 * foundNoun + foundVerb;
}
