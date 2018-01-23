function BinarySearchTree() {

  const Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  this.insert = function (data) {
    let newNode = new Node(data);

    // checking if root exists or not
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      insertNode(this.root, newNode);
    }
  }

  const insertNode = function (node, newNode) {
    // If the data is less than existing node then it should be aligned left
    if (newNode.data < node.data) {

      // If left node doesn't exist then create it
      // otherwise add left node to the existing node.
      if (node.left === null) {
        node.left = newNode
      }
      else {
        insertNode(node.left, newNode);
      }
    }

    // If the data is greater than existing node then it should be aligned right
    if (newNode.data > node.data) {

      // If right node doesn't exist then create it
      // otherwise add right node to the existing node.
      if (node.right === null) {
        node.right = newNode
      }
      else {
        insertNode(node.right, newNode);
      }
    }
  }

  /*
   * In-order traversal visits all the nodes of a BST in ascending order.
   * It means it will visit nodes from smallest to the largest.
   * Order of traversing is
   *  1. Left
   *  2. Root
   *  3. Right
   */
  this.inOrderTraverse = function (cb) {
    inOrderTraverseNode(this.root, cb);
  }

  const inOrderTraverseNode = function (node, cb) {
    if (!node) {
      return;
    }
    // Left --> Root --> Right
    inOrderTraverseNode(node.left, cb);
    cb(node.data);
    inOrderTraverseNode(node.right, cb);
  }

  /*
   * Pre-order traversal visits the node prior to its descendants.
   * Order of traversing is
   *  1. Root
   *  2. Left
   *  3. Right
   */
  this.preOrderTraverse = function (cb) {
    preOrderTraverseNode(this.root, cb);
  }

  const preOrderTraverseNode = function (node, cb) {
    if (!node) {
      return;
    }
    // Root --> Left --> Right
    cb(node.data);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  }
}


module.exports = BinarySearchTree;
