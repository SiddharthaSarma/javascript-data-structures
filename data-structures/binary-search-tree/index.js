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
}


module.export = BinarySearchTree;
