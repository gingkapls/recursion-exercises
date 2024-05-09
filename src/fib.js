// Functional approach

const fibF = (x) =>
  x === 0
    ? [0]
    : x === 1
      ? [0, 1]
      : fibF(x - 1).concat([fibF(x - 1).at(-2) + fibF(x - 1).at(-1)]);

// const result = Array.from({length: 10}, (_, i) => fibF(i));

console.log(fibF(2));
