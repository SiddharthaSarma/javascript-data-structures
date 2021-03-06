function BinarySearchTree() {
  const Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  };

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
  };

  const insertNode = function (node, newNode) {
    // If the data is less than existing node then it should be aligned left
    if (newNode.data < node.data) {
      // If left node doesn't exist then create it
      // otherwise add left node to the existing node.
      if (node.left === null) {
        node.left = newNode;
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
        node.right = newNode;
      }
      else {
        insertNode(node.right, newNode);
      }
    }
  };

  // level order traverse
  this.levelOrderTraverse = function (cb) {
    if (cb) {
      return cb(levelOrderTraverseNode(this.root));
    }
    return levelOrderTraverseNode(this.root);
  };

  const levelOrderTraverseNode = function (node, index = 0, arr = []) {
    if (!node) {
      return;
    }
    if (index === 0) {
      arr.push([node.data]);
      index++;
    }
    if (!arr[index] && (node.left || node.right)) {
      arr[index] = [];
    }
    if (node.left) {
      arr[index] = [...arr[index], node.left.data];
    }
    if (node.right) {
      arr[index] = [...arr[index], node.right.data];
    }
    index++;
    levelOrderTraverseNode(node.left, index, arr);
    levelOrderTraverseNode(node.right, index, arr);
    return arr;
  };

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
  };

  const inOrderTraverseNode = function (node, cb) {
    if (!node) {
      return;
    }
    // Left --> Root --> Right
    inOrderTraverseNode(node.left, cb);
    cb(node.data);
    inOrderTraverseNode(node.right, cb);
  };

  /*
   * Pre-order traversal visits the node prior to its descendants.
   * Order of traversing is
   *  1. Root
   *  2. Left
   *  3. Right
   */
  this.preOrderTraverse = function (cb) {
    preOrderTraverseNode(this.root, cb);
  };

  const preOrderTraverseNode = function (node, cb) {
    if (!node) {
      return;
    }
    // Root --> Left --> Right
    cb(node.data);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  };

  /*
   * Post-order traversal visits the node after it visits the descendants.
   * Use-case: computing the space used by a file in a directory
   *           and its subdirectories
   * Order of traversing is
   *  1. Left
   *  2. Right
   *  3. Root
   */
  this.postOrderTraverse = function (cb) {
    postOrderTraverseNode(this.root, cb);
  };

  const postOrderTraverseNode = function (node, cb) {
    if (!node) {
      return;
    }
    // Left --> Right --> Root
    postOrderTraverseNode(node.left, cb);
    postOrderTraverseNode(node.right, cb);
    cb(node.data);
  };

  // Min
  this.min = function () {
    return minNode(this.root);
  };

  const minNode = function (node) {
    if (!node) {
      return null;
    }

    while (node && node.left) {
      node = node.left;
    }

    return node.data;
  };

  // Max
  this.max = function () {
    return maxNode(this.root);
  };

  const maxNode = function (node) {
    if (!node) {
      return null;
    }

    while (node && node.right) {
      node = node.right;
    }

    return node.data;
  };

  // search
  this.search = function (val) {
    return searchNode(this.root, val);
  };

  const searchNode = function (node, val) {
    if (!node) {
      return false;
    }

    if (val < node.data) {
      return searchNode(node.left, val);
    }
    else if (val > node.data) {
      return searchNode(node.right, val);
    }
    else {
      return true;
    }
  };

  // Remove
  this.remove = function (val) {
    this.root = removeNode(this.root, val);
  };

  const removeNode = function (node, val) {
    if (!node) {
      return null;
    }

    if (val < node.data) {
      node.left = removeNode(node.left, val);
      return node;
    }
    else if (val > node.data) {
      node.right = removeNode(node.right, val);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = findMinNode(node.right);
      node.data = aux.data;
      node.right = removeNode(node.right, aux.data);
      return node;
    }
  };

  const findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
}

module.exports = BinarySearchTree;
