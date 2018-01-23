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

  // add data to the tree
  add(data, parentNode) {
    let node = new Node(data);
    parentNode = parentNode ? this.contains(parentNode) : null;

    if (parentNode) {
      parentNode.children.push(node);
    }
    else if (!this.root) {
      this.root = node;
    }
    else {
      return 'There is no parent node in the tree';
    }
  }

  remove(data) {
    if (this.root.data === data) {
      this.root = null;
    }

    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (node.children.data === data) {
          node.children.splice(i, 1);
        }
        else {
          queue.push(node.children[i]);
        }
      }
    }
  }

}
