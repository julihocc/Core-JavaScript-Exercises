import DirectedGraph from "./DirectedGraph.js";
let graph = new DirectedGraph();
let nodeA = graph.addNode("A");
let nodeB = graph.addNode("B");
let nodeC = graph.addNode("C");
let nodeD = graph.addNode("D");
let nodeE = graph.addNode("E");
graph.addEdge(nodeA, nodeB, 6);
graph.addEdge(nodeA, nodeD, 1);
graph.addEdge(nodeB, nodeD, 2);
graph.addEdge(nodeB, nodeE, 2);
graph.addEdge(nodeD, nodeE, 1);
graph.addEdge(nodeB, nodeC, 5);
graph.addEdge(nodeE, nodeC, 5);
graph.dijkstra("A", "C");
