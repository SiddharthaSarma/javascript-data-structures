var heapify = function(array, heapSize, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  var max = i;

  if (left < heapSize && array[left] > array[max]) {
    max = left;
  }

  if (right < heapSize && array[right] > array[max]) {
    max = right;
  }

  if (max !== i) {
    [array[i], array[max]] = [array[max], array[i]];
    heapify(array, heapSize, max);
  }
}

var heapSort = function(arr) {
  var heapSize = arr.length;

  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }

  while (heapSize > 1) {
    heapSize--;
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];
    heapify(arr, heapSize, 0)
  }
  console.log(arr);
}

heapSort([7, 1, 2, 4, 3, 9])
