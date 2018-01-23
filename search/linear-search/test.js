/* global expect */
const linearSearch = require('./index');

describe('Testing Linear/Sequential search', () => {
  test('should return the index value if the value is present', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  test('should return -1 if the value is not found', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 10)).toEqual(-1);
  });

  test('should return false if the input is not an array', () => {
    expect(linearSearch({}, 10)).toEqual(false);
  });
});
