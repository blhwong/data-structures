

// Instantiate a new graph
var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (node in this.graph) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var currentNode = this.graph[node];
  //Iterate through node's edges
  for (var edge in currentNode) {
    delete this.graph[edge][node];
  }

  delete this.graph[node];  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var returnVal = this.graph[fromNode][toNode];
  return !!returnVal;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //Add fromNode --> toNode
  this.graph[toNode][fromNode] = true;

  this.graph[fromNode][toNode] = true;
   
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[toNode][fromNode];
  delete this.graph[fromNode][toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(value, key) {
    cb(key);
  });


};

/*
 * Complexity: What is the time complexity of the above functions?
addNode - O(1)
contains - O(1)
removeNode - O(N)
hasEdge - O(1)
addEdge - O(1)
removeEdge- O(1)
forEachNode - O(N)
 */


