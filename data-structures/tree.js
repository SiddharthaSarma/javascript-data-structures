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
    // let queue = new Queue();
    // queue.enqueue(this.root)

    let queue = [this.root];
    let currentTree = queue.shift(); // queue.dequeue

    while (currentTree) {
      for (let i = 0; i < currentTree.children.length; i++) {
        queue.push(currentTree.children[i]); // queue.enqueue
      }
      cb(currentTree);
      currentTree = queue.shift(); // queue.dequeue
    }
  }

  // check if tree contains data or not
  contains(data) {
    return this.findBFS(data) ? true : false;
  }


  findBFS(val) {

    let queue = [this.root];
    let currentTree = queue.shift(); // queue.dequeue

    while (currentTree) {
      for (let i = 0; i < currentTree.children.length; i++) {
        queue.push(currentTree.children[i]); // queue.enqueue
      }
      currentTree = queue.shift(); // queue.dequeue

      if (currentTree.data === val) {
        return currentTree;
      }
    }
    return null;
  }
}
