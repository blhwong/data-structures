var BinarySearchTree = function(value) {
  var bst = {};
  _.extend(bst, bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

var bstMethods = {
  insert: function(value, head) {
    //If it's bigger than tree's value
    head = head || this;
    //Goes right
    if (value > head.value) {
      //If it's null you insert
      if (head.right === null) { 
        head.right = BinarySearchTree(value);
      } else {
        head.insert(value, head.right);
      }
    //Goes left
    } else if (value < head.value) {
      if (head.left === null) {
        head.left = BinarySearchTree(value);  
      } else {
        head.insert(value, head.left);
      }
    }
  },
  contains: function() {

  },
  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
