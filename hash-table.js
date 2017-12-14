function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}

// add
HashTable.prototype.add = function(key, value) {
  let hash = this.calculateHash(key);

  if (!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }

  if (!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }

  this.values[hash][key] = value;
};

// calculate hash
HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
};

// remove
HashTable.prototype.remove = function(key) {
  let hash = this.calculateHash(key);
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
};

// length
HashTable.prototype.length = function() {
  return this.numberOfValues;
};

// search
HashTable.prototype.search = function(key) {
  let hash = this.calculateHash(key);
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  }
  return null;
};

// print
HashTable.prototype.print = function() {
  let str = '';
  for (let key in this.values) {
    for (let val in this.values[key]) {
      str += this.values[key][val] + ' ';
    }
  }
  console.log(str);
};

// test
let hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log('length gives 5:', hashTable.length()); // => 5
console.log('search second gives 2:', hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); // => 2 3 5
console.log('length gives 3:', hashTable.length());
