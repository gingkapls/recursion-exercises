const mergeSort = (arr) => {
  // base case: single element
  if (arr.length === 1) return arr;

  const leftCount = Math.floor(arr.length / 2);

  const leftHalf = arr.toSpliced(leftCount);
  const rightHalf = arr.toSpliced(0, leftCount);
  console.log("left: ", leftHalf, "\tright: ", rightHalf);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  
};

const merge = (left, right) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      res.push(left.at(i))
      ++i;
    } else if (left[i] > right[j]) {
      res.push(right.at(j))
      ++j;
    }

  }

  // Cleanup for remaining elements in left
  while (i < left.length) {
    res.push(left.at(i));
    ++i;
  }

  // Cleanup for remaining elements in left
  while (j < right.length) {
    res.push(right.at(j));
    ++j;
  }

  return res;
};

const test = [9, 24, 5, 10, -10, 10];
console.log("original", test , "\n");
const res = mergeSort(test);

console.log("\nsorted: ", res);
