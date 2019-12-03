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
const answerP1 = puzzle1();
console.log('Answer D02-P01', answerP1, answerP1 === 3166704);

function puzzle2() {
  const input = fs.readFileSync('./day02.data', 'utf8');

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
const answerP2 = puzzle2();
console.log('Answer D02-P02', answerP2, answerP2 === 8018);

