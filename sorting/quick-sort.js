// Quicksort
function quickSort(arr, left, right) {
  let index;

  if (!arr.length) {
    return arr;
  }

  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? arr.length - 1 : right;

  index = partition(arr, left, right);

  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }

  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let i = left;
  let j = right;
  const pivot = arr[Math.floor((left + right) / 2)];

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;

    }
  }
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// test
quickSort([7, 1, 2, 4, 3, 9]);
