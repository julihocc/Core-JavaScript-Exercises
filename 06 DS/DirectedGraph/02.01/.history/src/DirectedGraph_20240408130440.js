import PriorityQueue from "../PriorityQueue.js";

class Node {
  constructor(value) {
    this.value = value;
    this.id = Symbol(value); // Ensure unique ID, assuming value is not unique
  }
}

class Edge {
  constructor(source, target, weight = 1) {
    this.source = source;
    this.target = target;
    this.weight = weight;
  }
}

class DirectedGraph {
  constructor() {
    this.nodes = new Map(); // Map Node ID to Node object
    this.edges = new Map(); // Map Node ID to list of Edge objects
  }

  addNode(value) {
    const node = new Node(value);
    if (!this.nodes.has(node.id)) {
      this.nodes.set(node.id, node);
      this.edges.set(node.id, []); // Initialize with an empty list of edges
    }
    return node;
  }

  addEdge(source, target, weight = 1) {
    if (!this.nodes.has(source.id) || !this.nodes.has(target.id)) {
      throw new Error("Both source and target nodes must exist in the graph");
    }
    const edge = new Edge(source, target, weight);
    this.edges.get(source.id).push(edge);
  }

  // getNeighbors(node) {
  //   if (!this.nodes.has(node.id)) {
  //     throw new Error("Node must exist in the graph");
  //   }
  //   return this.edges.get(node.id).map((id) => this.nodes.get(id));
  // }

  getNeighbors(node) {
    if (!this.nodes.has(node.id)) {
      throw new Error("Node must exist in the graph");
    }
    // Correctly retrieving the target nodes from edge objects
    return this.edges
      .get(node.id)
      .map((edge) => this.nodes.get(edge.target.id));
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

  dijkstra(startValue, endValue) {
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue(); // Assume we have a priority queue implementation

    this.nodes.forEach((node) => {
      distances[node.value] = Infinity;
      prev[node.value] = null;
      pq.enqueue(node.value, Infinity);
    });

    distances[startValue] = 0;
    pq.enqueue(startValue, 0);

    while (!pq.isEmpty()) {
      let { element: value } = pq.dequeue();
      let currentNode = [...this.nodes.values()].find(
        (node) => node.value === value
      );

      this.getNeighbors(currentNode).forEach((neighbor) => {
        let alt = distances[value] + this.getEdgeWeight(currentNode, neighbor);
        if (alt < distances[neighbor.value]) {
          distances[neighbor.value] = alt;
          prev[neighbor.value] = value;
          pq.enqueue(neighbor.value, distances[neighbor.value]);
        }
      });
    }

    // Extract the shortest path
    let path = [];
    for (let at = endValue; at != null; at = prev[at]) {
      path.push(at);
    }
    path.reverse();

    if (path.length < 2) {
      // Means no path exists
      console.log("No path found from", startValue, "to", endValue);
      return;
    }

    console.log(
      `Shortest path from ${startValue} to ${endValue}: ${path.join(
        " -> "
      )} with total distance: ${distances[endValue]}`
    );
  }

  getEdgeWeight(sourceNode, targetNode) {
    // Assumes an edge object contains a `weight` property. Adjust based on actual implementation
    if (!sourceNode || !targetNode) {
      console.error("sourceNode or targetNode is undefined");
      return Infinity;
    }
    let edge = this.edges
      .get(sourceNode.id)
      .find((edge) => edge.target.id === targetNode.id);
    return edge ? edge.weight : Infinity;
  }
}

export default DirectedGraph;
