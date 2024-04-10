import Graph from "./Graph.js";

const graph = new Graph();

const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");
const nodeD = graph.addNode("D");

graph.addEdge(nodeA, nodeB);
// graph.addEdge(nodeB, nodeD);
graph.addEdge(nodeB, nodeC);
graph.addEdge(nodeC, nodeD);
graph.addEdge(nodeD, nodeA);

const path = graph.findPath(nodeA, nodeD);
console.log("Path from A to D:", path);
