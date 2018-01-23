function BinarySearchTree() {

  const Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  this.insert = function (data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    }
    else {
      insertNode(this.root, newNode);
    }
  }

  const insertNode = function (node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      }
      else {
        insertNode(node.left, newNode);
      }
    }

    if (newNode.data > node.data) {
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
