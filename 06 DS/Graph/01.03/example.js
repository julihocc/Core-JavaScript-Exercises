import Graph from "./Graph.js";

const graph = new Graph();

// Adding nodes
const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");

// Adding edges
graph.addEdge(nodeA, nodeB, 1);
graph.addEdge(nodeB, nodeC, 2);
graph.addEdge(nodeC, nodeA, 3);

// Display the graph
graph.display();
