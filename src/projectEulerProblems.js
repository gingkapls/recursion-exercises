// 1. Multiples of 3 or 5
const sumOfMultiples = (x) =>
  x < 3
    ? 0
    : x % 5 === 0 || x % 3 === 0
      ? x + sumOfMultiples(x - 1)
      : sumOfMultiples(x - 1);

console.log(sumOfMultiples(999));

