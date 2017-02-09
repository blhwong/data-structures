var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    // if (size === 0) {
    //   list.head = Node(value);
    // }
    // size++;
    // list.tail = Node(value);

    // // //If it's currently empty
    // if (size === 0) {
    //   var newNode = Node(value);
    //   list.head = newNode;
    //   list.tail = newNode;
    // } else if (size === 1) { //If it's not empty
    //   var newNode = Node(value);
    //   list.tail = newNode;

    //   list.head.next = newNode;
    
    // } else {
    //   list.tail.next = Node(value);
    // }

    if (list.head === null && list.tail === null) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }


  };

  list.removeHead = function() {
    var returnValue = list.head.value;
    list.head = list.head.next;
    return returnValue;

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
