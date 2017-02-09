var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);

  stack.stackSize = 0;
  stack.storage = {};

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


*/