const linearSearch = function(arr, val) {
  if (!Array.isArray(arr)) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};

module.exports = linearSearch;
