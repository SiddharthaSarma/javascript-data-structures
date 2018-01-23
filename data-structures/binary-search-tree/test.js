/* global expect */
const BinarySearchTree = require('./index');

describe('Testing Binary search tree', () => {
  test('Binary search tree should be function', () => {
    expect(typeof (BinarySearchTree)).toEqual('object');
  });
});
