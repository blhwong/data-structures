var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;      
    } else {      
      list.tail.next = newNode;      
    }
    list.tail = newNode;

  };

  list.removeHead = function() {
    var returnValue = list.head.value;
    list.head = list.head.next;
    return returnValue;

  };

  list.contains = function(target) {
        
    var tempNode = list.head;
    while (tempNode) {
      if (tempNode.value === target) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
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
 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 */
