import Graph from "./Graph.js";

const graph = new Graph();

// Adding nodes
const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");
const nodeD = graph.addNode("D"); // Additional node for complexity

// Adding edges
graph.addEdge(nodeA, nodeB, 1);
graph.addEdge(nodeB, nodeC, 2);
graph.addEdge(nodeC, nodeA, 3);
graph.addEdge(nodeA, nodeD, 4); // Additional edges for complexity
graph.addEdge(nodeD, nodeB, 5);

// Perform DFS and get visited values
const visitedValues = graph.traverse(nodeA);

console.log("Visited Values:", Array.from(visitedValues));
