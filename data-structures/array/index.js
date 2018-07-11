/*
Complexity
Average
Access Search Insertion Deletion 
 O(1)   O(n)    O(1)      O(n) 
*/

function MyArray() {
  this.items = [];
}

MyArray.prototype.add = function(item) {
  this.items.push(item);
};

MyArray.prototype.remove = function(data) {
  this.items = this.items.filter(function(value) {
    return value !== data;
  });
};

MyArray.prototype.search = function(value) {
  let searchIndex = this.items.indexOf(value);
  if (~searchIndex) {
    return searchIndex;
  }
  return null;
};

MyArray.prototype.getAtIndex = function(index) {
  return this.items[index];
};

MyArray.prototype.length = function() {
  return this.items.length;
};

MyArray.prototype.print = function(cb) {
  cb(this.items);
};

module.exports = MyArray;
