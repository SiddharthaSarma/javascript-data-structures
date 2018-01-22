const binarySearch = require('./index');

describe('Testing Binary search', () => {

  test('should return the correct index value', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  });

  test('should return the correct index value', () => {
    expect(binarySearch([1, 2, 3, 4, 6, 8, 9, 10, 20, 100], 100)).toEqual(9);
  });

  test('should return -1 if the value doesn\'t exist', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10)).toEqual(-1);
  });
});
