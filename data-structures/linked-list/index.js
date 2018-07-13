class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  add(value) {
    let node = new Node(value);
    let current = this.head;

    if (!this.head) {
      this.head = node;
    }
    else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._length++;
    return node;
  }

  searchNodeAt(pos) {
    let current = this.head;
    let message = 'Failure: non-existent node in the list';
    let count = 1;

    if (pos < 1 || pos > this._length) {
      throw new Error(message);
    }

    while (count < pos) {
      current = current.next;
      count++;
    }
    return current;
  }

  remove(pos) {
    let current = this.head;
    let message = `Can't remove at this position`;
    let previousNode = null;
    let deletedNode = null;
    let count = 1;

    if (pos < 1 || pos > this._length) {
      throw new Error(message);
    }

    if (pos == 1) {
      let head = this.head;
      this.head = current.next.next;
      return head;
    }
    while (count <= pos) {
      if (count == pos) {
        deletedNode = current;
        previousNode.next = current.next;
      }
      else {
        previousNode = current;
        current = current.next;
      }
      count++;
    }
    return deletedNode;
  }
}

module.exports = LinkedList;
