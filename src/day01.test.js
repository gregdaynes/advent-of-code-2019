const { part1, part2 } = require('./day01');

describe('Day 01', () => {
  it('Part 1', () => {
    expect(part1()).toBe(3553700);
  });

  it('Part 2', () => {
    expect(part2()).toBe(5327664);
  });
});
