class Queue {
  constructor() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }

  size() {
    return this._newestIndex - this._oldestIndex;
  }

  enqueue(val) {
    this._storage[this._newestIndex] = val;
    this._newestIndex++;
  }

  dequeue() {
    let deletedData;

    if (this._oldestIndex !== this._newestIndex) {
      deletedData = this._storage[this._oldestIndex];
      delete this._storage[this._oldestIndex++];
    }
    return deletedData;
  }
  
  front() {
    return this._storage[this._newestIndex - 1];
  }
  
  rear() {
    return this._storage[this._oldestIndex];
  }
}
