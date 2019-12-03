const {
  calcFuelFor,
  calcFuelForInclusive,
  calcTotalFuelFor,
} = require('./fuel-calculators');

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

describe("#calcFuelForInclusive", () => {
  test("a 1969 mass requires an additional 966 mass of fuel", () => {
    const subject = calcFuelForInclusive(1969);
    expect(subject).toBe(1969 + 966);
  });

  test("a 100756 mass requires an additional 50346 mass of fuel", () => {
    const subject = calcFuelForInclusive(100756);
    expect(subject).toBe(100756 + 50346);
  });
});

describe("#calcFuelForMass", () => {
  test("a 1969 mass requires 966 mass of fuel", () => {
    const subject = calcTotalFuelFor(1969);
    expect(subject).toBe(966);
  });

  test("a 100756 mass requires 50346 mass of fuel", () => {
    const subject = calcTotalFuelFor(100756);
    expect(subject).toBe(50346);
  });
});
