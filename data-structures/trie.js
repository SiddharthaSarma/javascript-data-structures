function Node() {
  this.keys = new map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  }
  this.isEnd = function() {
    return this.end;
  }
}

function Trie() {

  this.root = new Node();

  this.add = function(input, node = this.root) {
    if(input.length == 0) {
      node.setEnd();
      return;
    } else if(!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
    }
    return this.add(input.substr(1), node.keys.get(input[0]));
  }

}

/*
* Need to add isWord and print method.
*/
