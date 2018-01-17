class Stack {
  constructor() {
    this._length = 0;
    this._storage = {};
  }

  isEmpty() {
    return this._length === 0;
  }

  peek() {
    return this._storage[this._length - 1];
  }

  push(val) {
    this._storage[this._length++] = val;
  }

  pop() {
    this._length--;
    let val = this._storage[this._length];
    delete this._storage[this._length];
    return val;
  }
}
