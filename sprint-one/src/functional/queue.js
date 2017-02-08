var Queue = function() {
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
};
