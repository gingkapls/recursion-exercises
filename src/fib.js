// Recurisve approach
const fibsRec = (x) => {
  if (x === 0) return [];
  if (x === 1) return [0];
  if (x === 2) return [0, 1];

  const seq = fibsRec(x - 1);
  return seq.concat(seq.at(-1) + seq.at(-2));
};

// Iterative

const fibs = (x) => {
  let res = [0, 1];
  if (x <= 0) return [];
  if (x <= 2) return res.toSpliced(x);

  for (let i = 2; i < x; ++i) {
    res.push(res.at(-1) + res.at(-2));
  }

  return res;
};

console.log(fibs(8));
console.log(fibsRec(8));
