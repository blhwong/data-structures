

var HashTable = function() {
  this._limit = 8;
  this.size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtBucket = this._storage.get(index);

  
  if (arrayAtBucket) { //If there's items at the bucket [[1: apple]] --> [1: orange]
    var toInsert = [k, v];
    for (var a = 0; a < arrayAtBucket.length; a++) {
      if (arrayAtBucket[a][0] === k ) { //Overwrites duplicate keys
        arrayAtBucket[a] = toInsert;
        return;
      }
    }
    arrayAtBucket.push(toInsert); 
    this.size++;
  } else { // It's empty
    arrayAtBucket = [[k, v]];
    this._storage.set(index, arrayAtBucket); 
    this.size++;
  }
  this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //expects undefined or [[k, v]]

  var arrayAtBucket = this._storage.get(index);
  if (arrayAtBucket) {
  for (var a = 0; a < arrayAtBucket.length; a++) {
    if (arrayAtBucket[a][0] === k) {
        return arrayAtBucket[a][1];
      } 
    }  
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtBucket = this._storage.get(index);

  for (var a = 0; a < arrayAtBucket.length; a++) {
    if (arrayAtBucket[a][0] === k) {
      arrayAtBucket = arrayAtBucket.splice(0, a).concat(arrayAtBucket.splice(a + 1));
      this._storage.set(index, arrayAtBucket);

    }
  }
  this.size--;

  //How many objects occupy our array;
  this.resize();
};

HashTable.prototype.resize = function() {
  var ratio = this.size / this._limit;

  if (ratio > 0.75 ) {
    
    this._limit *= 2;
    var newArray = LimitedArray();
    newArray._limit = this._limit;
    //iterate through old elements and set it to the new elements
    this._storage.each(function(value, key, collection) {
      debugger
      newArray.set(key, value);
    }); 
    debugger
    this._storage = newArray;

    //Finding the size of the newArray storage
    newArray.each(function(value, key, collection) {
      console.log("current index: " + key)
      console.log(collection);
    });

    console.log("Size: " + this._storage)
  } else if (ratio < 0.25 && this._limit > 8) {
    debugger
    this._limit /= 2;
    
    this._storage.each(function(value, key, collection) {
      newArray.set(key, value);
    });

    this._storage = newArray;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


