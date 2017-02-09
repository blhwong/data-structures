var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {queueSize: 0, start: 0, storage: {}};

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    //Set the value
    this.storage[this.start + this.queueSize] = value; 

    //Increment size
    this.queueSize++;

  },
  dequeue: function() {
    if (this.queueSize > 0) { 
      var returnValue = this.storage[this.start];
      this.start++;
      this.queueSize--;

      return returnValue;
    }
  },
  size: function() {
    return this.queueSize;
  }
};


/*
var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var start = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    //Set the value
    storage[start + size] = value; 

    //Increment size
    size++;


  };

  someInstance.dequeue = function() {
    if (size > 0) { 
      var returnValue = storage[start];
      start++;
      size--;

      return returnValue;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
  */