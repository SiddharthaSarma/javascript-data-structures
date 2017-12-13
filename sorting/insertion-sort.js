// Insertion sort
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      swapElements(arr, i + 1);
    }
  }
  console.log(arr);
}

function swapElements(arr, j) {
  for (let i = j; j > 0; j--) {
    if (arr[i] < arr[j - 1]) {
      swap(arr, j, j - 1);
      i--;
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// test
insertionSort([7, 1, 2, 4, 3, 9]); // [1, 2, 3, 4, 7, 9]
