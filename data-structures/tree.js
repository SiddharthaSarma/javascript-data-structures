class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.parent = null;
  }
}

class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  traverseDF(cb) {
    (function recursive(currentNode) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    })(this.root);
  }

  traverseBF(cb) {
    let queue = new Queue();
    queue.enqueue(this.root)

    let currentTree = queue.dequeue();

    while (currentTree) {
      for (let i = 0; i < currentTree.children.length; i++) {
        queue.enqueue(currentTree.children[i]);
      }
      cb(currentTree);
      currentTree = queue.dequeue();
    }
  }
}
