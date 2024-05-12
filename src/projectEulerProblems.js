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

// sumAll

const sumAllSmart = (arr1, arr2) => {
  const n1 = arr1.reduce((total, num) => total + num);
  const n2 = arr2.reduce((total, num) => total + num);

  return n1 * n2;
};

console.log("sumAll: ", sumAllSmart([1, 2], [5, 6]));

const num = 600_851_475_143;
console.log("num: ", num);
console.log(listPrimeFactors(num));

// Memoize so our functional fib can actually calculate more than 15 terms
const memoizeFunc =
  (fn) =>
  function memoFn(arg) {
    if (memoFn?.values === undefined) {
      memoFn.values = {};
    }

    if (memoFn.values?.[arg] === undefined) {
      memoFn.values[arg] = fn(arg);
    }

    return memoFn.values[arg];
  };


// Functional approach
let fibF = (x) =>
  x <= 0
    ? []
    : x === 1
      ? [0]
      : x === 2
        ? [0, 1]
        : fibF(x - 1).concat(fibF(x - 1).at(-1) + fibF(x - 1).at(-2));

fibF = memoizeFunc(fibF);

console.log(fibF(10));
console.log(fibF.values);
