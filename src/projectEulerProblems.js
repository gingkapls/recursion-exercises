// 1. Multiples of 3 or 5
const sumOfMultiples = (x) =>
  x < 3
    ? 0
    : x % 5 === 0 || x % 3 === 0
      ? x + sumOfMultiples(x - 1)
      : sumOfMultiples(x - 1);

console.log(sumOfMultiples(999));

// 2. sum of even fibonacci
const fibs = (x) => {
  if (x === 0) return [];
  if (x === 1) return [0];
  if (x === 2) return [0, 1];

  const seq = fibs(x - 1);

  return seq.concat(seq.at(-1) + seq.at(-2));
};

console.log(fibs(50).reduce((sum, el) => ((el & 1) === 0 ? sum + el : sum)));

// 3. List prime factors 
const listPrimeFactors = (x, res = []) => {
  if (x <= 1) return [];

  let i = 2;
  for (; i <= x; ++i) {
    if (x % i === 0) {
      res.push(i);
      break;
    }
    if (i === x) res.push(i);
  }

  // re-order for TCO
  listPrimeFactors(x / i, res);
  return res;
};

const num = 600_851_475_143;
console.log("num: ", num);
console.log(listPrimeFactors(num));
