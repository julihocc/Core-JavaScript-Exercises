import DirectedGraph from "./DirectedGraph.js";

let graph = new DirectedGraph();

// Add nodes
let nodeA = graph.addNode("A");
let nodeB = graph.addNode("B");
let nodeC = graph.addNode("C");
let nodeD = graph.addNode("D");
let nodeE = graph.addNode("E");

// Add edges to form a DAG
graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeB, nodeD);
graph.addEdge(nodeC, nodeD);
graph.addEdge(nodeD, nodeE);

// Perform topological sort
let topologicalOrder = graph.topologicalSort();
console.log("Topological Sort Order:", topologicalOrder);
