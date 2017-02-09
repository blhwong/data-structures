var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.start = 0;
  queue.queueSize = 0;

  return queue;
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


*/