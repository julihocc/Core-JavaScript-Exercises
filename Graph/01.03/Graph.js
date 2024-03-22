import Node from "./Node.js";

export default class Graph {
  constructor(isDirected = false) {
    this.nodes = new Map(); // Use a Map to store nodes by their unique ID
    this.edges = new Map(); // Adjacency list to store edges
    this.isDirected = isDirected;
  }

  // Add a node to the graph
  addNode(value) {
    const node = new Node(value);
    this.nodes.set(node.id, node);
    this.edges.set(node.id, []);
    return node; // Return the newly created node
  }

  // Add an edge between two nodes
  addEdge(node1, node2, weight = 1) {
    if (!this.nodes.has(node1.id) || !this.nodes.has(node2.id)) {
      throw new Error("Both nodes must exist in the graph");
    }

    this.edges.get(node1.id).push({ node: node2, weight });

    // If the graph is undirected, add an edge back from node2 to node1
    if (!this.isDirected) {
      this.edges.get(node2.id).push({ node: node1, weight });
    }
  }

  // Get the neighbors of a node
  getNeighbors(node) {
    if (!this.nodes.has(node.id)) {
      throw new Error("Node must exist in the graph");
    }
    return this.edges.get(node.id).map((edge) => ({
      node: edge.node,
      weight: edge.weight,
    }));
  }

  // Display the graph
  display() {
    this.edges.forEach((edges, nodeId) => {
      const fromNode = this.nodes.get(nodeId);
      const neighbors = edges.map(
        (edge) => `${edge.node.value}(weight: ${edge.weight})`
      );
      console.log(`${fromNode.value} => ${neighbors.join(", ")}`);
    });
  }

  // Depth-First Search to traverse the graph and return visited values
  dfs(startNode, visited = new Set(), values = new Set()) {
    if (!startNode) {
      return values;
    }

    // Mark the start node as visited and add its value to the values set
    visited.add(startNode.id);
    values.add(startNode.value);

    // Get all neighbors
    const neighbors = this.getNeighbors(startNode);

    // Recursively visit each unvisited neighbor
    for (const { node } of neighbors) {
      if (!visited.has(node.id)) {
        this.dfs(node, visited, values);
      }
    }

    return values; // Return the set of visited node values
  }

  // Find a path between two nodes
  findPath(startNode, endNode, visited = new Set(), path = []) {
    // Add the start node to visited and path
    visited.add(startNode.id);
    path.push(startNode.value);

    // Base case: if start node is the end node, return the path
    if (startNode.id === endNode.id) {
      return path;
    }

    // Explore neighbors
    const neighbors = this.getNeighbors(startNode);
    for (const { node } of neighbors) {
      if (!visited.has(node.id)) {
        const resultPath = this.findPath(node, endNode, visited, path);
        if (resultPath) return resultPath; // If a path is found, return it
      }
    }

    path.pop(); // Backtrack: Remove the current node from the path
    return null; // If no path is found from this branch, return null
  }
}
