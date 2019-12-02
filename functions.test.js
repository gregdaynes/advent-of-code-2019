const {
  calcFuelFor,
} = require('./functions');

describe("#calcFuelFor", () => {
  test("a mass of 9 requires a fuel of 1", () => {
    const subject = calcFuelFor(9);
    expect(subject).toBe(1);
  });

  test("a mass of 8 requires a fuel of 0", () => {
    const subject = calcFuelFor(7);
    expect(subject).toBe(0);
  });
});
