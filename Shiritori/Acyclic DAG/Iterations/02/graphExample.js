import Graph from "./Graph.js";

// Example Usage:
const graph = new Graph();
graph.addEdge(0, 1, 20);
graph.addEdge(1, 2, 10);
graph.addEdge(2, 3, 30);
graph.addEdge(0, 2, 10);
graph.addEdge(1, 3, 20);

console.log("The maximum possible flow is " + graph.fordFulkerson(0, 3));