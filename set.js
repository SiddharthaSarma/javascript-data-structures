function CustomSet() {
  this.values = [];
  this.numberOfValues = 0;
}

// add
CustomSet.prototype.add = function (value) {
  let index = this.values.indexOf(value);
  if (!~index) {
    this.values.push(value);
    this.numberOfValues++;
  }
};

// remove
CustomSet.prototype.remove = function (value) {
  let index = this.values.indexOf(value);
  if (~index) {
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};

// length
CustomSet.prototype.length = function () {
  return this.numberOfValues;
};

// print
CustomSet.prototype.print = function () {
  console.log(this.values.join(' '));
};

// contains
CustomSet.prototype.contains = function (val) {
  return this.values.indexOf(val) !== -1;
};

// union
CustomSet.prototype.union = function (set) {
  let newSet = new CustomSet();

  set.values.forEach(function (val) {
    newSet.add(val)
  });

  this.values.forEach(function (val) {
    newSet.add(val);
  });

  return newSet;
};


// intersect
CustomSet.prototype.intersect = function (set) {
  let newSet = new CustomSet();
  this.values.forEach(function (value) {
    if (set.contains(value)) {
      newSet.add(value);
    }
  });

  return newSet;
};

// difference
CustomSet.prototype.difference = function (set) {
  let newSet = new CustomSet();
  this.values.forEach(function (value) {
    if (!set.contains(value)) {
      newSet.add(value);
    }
  });

  return newSet;
};

// subset
CustomSet.prototype.isSubset = function (set) {
  return set.values.every(function (ele) {
    return this.contains(ele);
  }, this);
};

var set = new CustomSet();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
console.log('---');
var set1 = new CustomSet();
set1.add(1);
set1.add(2);
var set2 = new CustomSet();
set2.add(2);
set2.add(3);
var set3 = set2.union(set1);
set3.print(); // => 1 2 3
var set4 = set2.intersect(set1);
set4.print(); // => 2
var set5 = set.difference(set3); // 1 2 4 diff 1 2 3
set5.print(); // => 4
var set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3
