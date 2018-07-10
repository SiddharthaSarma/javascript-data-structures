function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// test
bubbleSort([7, 5, 2, 4, 3, 9]); // [2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); // [1, 3, 4, 5, 7, 9]
bubbleSort([1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
