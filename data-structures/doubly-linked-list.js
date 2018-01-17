class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  add(val) {
    let node = new Node(val);
    /* set current tails next to node
     * set node previous to tail
     * set tail to current node
     */
    if (this._length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._length++;
  }

  searchNodeAt(position) {
    let count = 1;
    let currentNode = this.head;
    let message = 'Failure! Non-existent node in the list';
    if (position < 1 || position > this._length) {
      throw new Error(message);
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  remove(position) {
    let count = 1;
    let currentNode = this.head;
    let message = 'Failure! Non-existent node in the list';

    if (position < 1 || position > this._length) {
      throw new Error(message);
    }
    // case-1: If the position is 1
    if (position === 1) {
      this.head = currentNode.next;

      if (!this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      // case-2: If the position is last
    } else if (position === this._length) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      // case-3: If the position is middle
    } else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
    this._length--;
  }
}
