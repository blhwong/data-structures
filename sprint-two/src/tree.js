var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeToAdd = Tree(value);
  this.children.push(treeToAdd);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  //Iterate through children
  for (var a = 0; a < this.children.length; a++) {
    //Use recursion to pass on its children
    if (this.children[a].contains(target)) {
      return true;
    }
  }


  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
