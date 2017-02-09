var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {stackSize: 0, storage: {}};


  //extend the stack;
  _.extend(stack, stackMethods);

  return stack;
};


var stackMethods = {
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function () {
    if (this.stackSize > 0) {
      this.stackSize--;
      return this.storage[this.stackSize];
    }
  },

  size: function() {
    return this.stackSize;
  }

};




/*
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
    someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      return storage[size];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
*/