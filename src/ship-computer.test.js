const {
  compute,
} = require('./ship-computer');

describe("example programs", () => {
  const subject = (input) => compute(input);

  fit("can run a single set of intcode and exit", () => {
    const results = subject("1,0,0,0,99").join(',');
    expect(results).toEqual("2,0,0,0,99");
  });

  fit("can run a single set of intcode and exit", () => {
    const results = subject("2,3,0,3,99").join(',');
    expect(results).toEqual("2,3,0,6,99");
  });

  fit("can run a single set of intcode and exit", () => {
    const results = subject("2,4,4,5,99,0").join(',');
    expect(results).toEqual("2,4,4,5,99,9801");
  });

  fit("can run multiple sets of intcode and exit", () => {
    const results = subject("1,1,1,4,99,5,6,0,99").join(',');
    expect(results).toEqual("30,1,1,4,2,5,6,0,99");
  });
});
