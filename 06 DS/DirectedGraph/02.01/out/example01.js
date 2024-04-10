import DirectedGraph from "./DirectedGraph.js";
// Create a new directed graph
let graph = new DirectedGraph();
// Add nodes to the graph
let nodeA = graph.addNode("A");
let nodeB = graph.addNode("B");
let nodeC = graph.addNode("C");
let nodeD = graph.addNode("D");
let nodeE = graph.addNode("E");
// Add edges between the nodes to define the graph structure
graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeB, nodeD);
graph.addEdge(nodeC, nodeD);
graph.addEdge(nodeD, nodeE);
// Display the graph
console.log("Graph structure:");
graph.display();
// Display the neighbors of a specific node
console.log("\nNeighbors of Node B:");
let neighborsB = graph.getNeighbors(nodeB);
neighborsB.forEach((neighbor) => console.log(neighbor.value));
// Display the neighbors of another specific node
console.log("\nNeighbors of Node D:");
let neighborsD = graph.getNeighbors(nodeD);
neighborsD.forEach((neighbor) => console.log(neighbor.value));
