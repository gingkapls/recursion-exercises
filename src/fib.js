// Functional approach
const fibF = (x) =>
  x <= 0
    ? [0]
    : x <= 2
      ? [0, 1]
      : fibF(x - 1).concat([fibF(x - 1).at(-2) + fibF(x - 1).at(-1)]);


// Iterative

const fibs = (x) => {
    let res = [0, 1];
    if (x <= 0) return [];
    if (x <= 2) return res.toSpliced(x);
    
    for (let i = 2; i < x; ++i) {
        res.push(res.at(-1) + res.at(-2)); 
    }
    
    return res;
}



console.log(fibs(8));
console.log(fibF(8));
