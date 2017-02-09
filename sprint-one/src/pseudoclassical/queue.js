var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.start = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  //Set the value
  this.storage[this.start + this.queueSize] = value; 

  //Increment size
  this.queueSize++;

};

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) { 
    var returnValue = this.storage[this.start];
    this.start++;
    this.queueSize--;

    return returnValue;
  }
};

Queue.prototype.size = function() {
  return this.queueSize;
};