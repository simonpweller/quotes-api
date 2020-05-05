const { getRandomElement } = require("./utils");

describe("getRandomElement", () => {
  it(`should return an element from the array`, () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomElement = getRandomElement(arr);

    expect(arr.includes(randomElement)).toBe(true);
  });

  it(`should return each element with roughly the same probability`, () => {
    const arr = [0, 1];
    const randomElements = Array.from({ length: 1000 }, () =>
      getRandomElement(arr)
    );

    const zeroCount = randomElements.filter((element) => element === 0).length;
    const oneCount = randomElements.filter((element) => element === 1).length;

    expect(zeroCount).toBeLessThan(600);
    expect(zeroCount).toBeGreaterThan(400);

    expect(oneCount).toBeLessThan(600);
    expect(oneCount).toBeGreaterThan(400);

    expect(zeroCount + oneCount).toBe(1000);
  });
});
