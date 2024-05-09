const mergeSort = (arr) => {
  // base case: single element
  if (arr.length === 1) return arr;

  const leftCount = Math.floor(arr.length / 2);

  const leftHalf = arr.toSpliced(leftCount);
  const rightHalf = arr.toSpliced(0, leftCount);
  console.log("left: ", leftHalf, "\tright: ", rightHalf);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  
};

const merge = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res[k] = arr1[i];
      ++i;
    } else if (arr1[i] > arr2[j]) {
      res[k] = arr2[j];
      ++j;
    }

    ++k;
  }

  // Cleanup for remaining elements in arr1
  while (i < arr1.length) {
    res[k] = arr1[i];
    ++i;
    ++k;
  }

  // Cleanup for remaining elements in arr1
  while (j < arr2.length) {
    res[k] = arr2[j];
    ++j;
    ++k;
  }

  return res;
};

const test = [9, 24, 5, 10, -10, 10];
console.log("original", test , "\n");
const res = mergeSort(test);

console.log("\nsorted: ", res);
