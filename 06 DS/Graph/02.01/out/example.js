import Graph from "./Graph.js";
const graph = new Graph();
const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");
graph.addEdge(nodeA, nodeB, 1);
graph.addEdge(nodeB, nodeC, 2);
graph.addEdge(nodeC, nodeA, 3);
graph.display();
