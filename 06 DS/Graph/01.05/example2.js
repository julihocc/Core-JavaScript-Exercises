import Graph from "./Graph.js";

const graph = new Graph();

const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");
const nodeD = graph.addNode("D");

graph.addEdge(nodeA, nodeB, 1);
graph.addEdge(nodeB, nodeC, 2);
graph.addEdge(nodeC, nodeA, 3);
graph.addEdge(nodeA, nodeD, 4);
graph.addEdge(nodeD, nodeB, 5);

const visitedValues = graph.dfs(nodeA);

console.log("Visited Values:", Array.from(visitedValues));
