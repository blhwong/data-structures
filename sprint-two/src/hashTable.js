

var HashTable = function() {
  this._limit = 8;
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
  } else { // It's empty
    arrayAtBucket = [[k, v]];
    this._storage.set(index, arrayAtBucket); 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //expects undefined or [[k, v]]
  var arrayAtBucket = this._storage.get(index);
  for (var a = 0; a < arrayAtBucket.length; a++) {
    if (arrayAtBucket[a][0] === k) {
      return arrayAtBucket[a][1];
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

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


