/* global expect */
const BinarySearchTree = require('./index');
const Helper = require('./helper');

describe('Testing Binary search tree', () => {

  test('Binary search tree should be function', () => {
    expect(typeof BinarySearchTree).toEqual('function');
  });

  test('should insert the elements properly', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    expect(tree.root.data).toEqual(11);
  });

  test('should support In-order traversal', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    let arr = [];
    let result = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25];
    tree.inOrderTraverse((val) => arr.push(val));
    expect(arr).toEqual(result);
  });

  test('should support Pre-order traversal', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    let expectedResultsArr = [];
    let result = [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25];
    tree.preOrderTraverse((val) => expectedResultsArr.push(val));
    expect(expectedResultsArr).toEqual(result);
  });

});
