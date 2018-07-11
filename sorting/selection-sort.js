
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = m = i; j < arr.length; j++) {
      if (arr[m] > arr[j]) {
        m = j;
      }
    }
    let temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

// test
selectionSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
selectionSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]
selectionSort([1, 2, 3, 4, 5, 6]); //[1, 2, 3, 4, 5, 6]
