// Merge sort

function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  }
  const pivot = parseInt(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 0]));
