const binarySearch = function (sortedArr, val) {
  let high = sortedArr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (val === sortedArr[mid]) {
      return mid;
    }

    if (val > sortedArr[mid]) {
      low = mid + 1;
    }

    if (val < sortedArr[mid]) {
      high = mid - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
