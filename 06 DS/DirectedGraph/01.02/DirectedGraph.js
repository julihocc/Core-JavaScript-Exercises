class Node {
  constructor(value, weight = 1) {
    this.value = value;
    this.id = Symbol(value); // Ensure unique ID, assuming value is not unique
  }
}

class DirectedGraph {
  constructor() {
    this.nodes = new Map(); // Map Node ID to Node object
    this.edges = new Map(); // Map Node ID to Array of neighbor IDs
  }

  addNode(value) {
    const node = new Node(value);
    if (!this.nodes.has(node.id)) {
      this.nodes.set(node.id, node);
      this.edges.set(node.id, []); // Initialize adjacency list
    }
    return node;
  }

  addEdge(source, target) {
    if (!this.nodes.has(source.id) || !this.nodes.has(target.id)) {
      throw new Error("Both source and target nodes must exist in the graph");
    }
    // Add target to source's adjacency list
    this.edges.get(source.id).push(target.id);
  }

  getNeighbors(node) {
    if (!this.nodes.has(node.id)) {
      throw new Error("Node must exist in the graph");
    }
    return this.edges.get(node.id).map((id) => this.nodes.get(id));
  }

  display() {
    this.edges.forEach((neighbors, nodeId) => {
      const fromNode = this.nodes.get(nodeId);
      const neighborList = neighbors
        .map((id) => this.nodes.get(id).value)
        .join(", ");
      console.log(`${fromNode.value} -> ${neighborList}`);
    });
  }

  topologicalSort() {
    let stack = [];
    let visited = new Set();

    // Helper function to recursively perform DFS
    const dfs = (node) => {
      visited.add(node.id);
      let neighbors = this.getNeighbors(node);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor.id)) {
          dfs(neighbor);
        }
      });
      stack.push(node); // Add the node to the stack after visiting its neighbors
    };

    // Perform DFS for each unvisited node
    this.nodes.forEach((node) => {
      if (!visited.has(node.id)) {
        dfs(node);
      }
    });

    // Since the nodes are added to the stack after visiting all neighbors,
    // we reverse the stack to get the correct topological order.
    let topologicalOrder = stack.reverse().map((node) => node.value);
    return topologicalOrder;
  }
}

export default DirectedGraph;
