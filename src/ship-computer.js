const util = require('util');

module.exports = {
  compute,
  prepareIntcode,
};

function compute(input, cursor = 0) {
  const intcode = prepareIntcode(input);

  const opcode = intcode[cursor];

  if (cursor >= intcode.length || opcode === 99) return intcode;

  const newIntCode = runCommand(opcode, cursor, intcode);

  return compute(newIntCode, cursor += 4);
}

function prepareIntcode(intcode) {
  return (util.isString(intcode))
    ? intcode.split(',').map(value => parseInt(value))
    : intcode;
}

function addSet(input, pos1, pos2) {
  return input[pos1] + input[pos2];
}

function multiplySet(input, pos1, pos2) {
  return input[pos1] * input[pos2];
}

function getValuesAtPositions(input, pos1, pos2) {
  return [ input[pos1], input[pos2] ];
}

function runCommand(opcode, cursor, input) {
  const intcode = input.slice(0);
  const pos1 = input[cursor + 1];
  const pos2 = input[cursor + 2];
  const posR = input[cursor + 3];
  const operation = (opcode === 1) ? addSet : multiplySet

  intcode[posR] = operation(intcode, pos1, pos2);

  return intcode;
}
