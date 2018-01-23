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
    tree.inOrderTraverse((val) => arr.push(val));
    let result = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25];
    expect(arr).toEqual(result);
  });

  test('should support Pre-order traversal', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    let expectedResultsArr = [];
    tree.preOrderTraverse((val) => expectedResultsArr.push(val));
    let result = [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25];
    expect(expectedResultsArr).toEqual(result);
  });

  test('should support Post-order traversal', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    let expectedResultsArr = [];
    tree.postOrderTraverse(val => expectedResultsArr.push(val));
    let result = [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11];
    expect(expectedResultsArr).toEqual(result);
  });

  test('should get the minimum value', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    expect(tree.min()).toEqual(3);
  });

  test('should get the maximum value', () => {
    let tree = new BinarySearchTree();
    Helper.insertData(tree);
    expect(tree.max()).toEqual(25);
  });

});
