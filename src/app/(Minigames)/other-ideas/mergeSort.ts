function merge(arr1: number[], arr2: number[]) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function createArr(size: number, min: number, max: number) {
  let arr = Array(size);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRndInteger(min, max);
  }
  return arr;
}

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Log to console
let a: number[] = createArr(9, -10, 99);
console.log(a);
console.log(mergeSort(a));
