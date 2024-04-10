import PriorityQueue from "./PriorityQueue.js";

class Node<T> {
  value: T;
  id: symbol;
  constructor(value: T) {
    this.value = value;
    this.id = Symbol(); // Ensure unique ID, assuming value is not unique
  }
}

class Edge<T> {
  source: Node<T>;
  target: Node<T>;
  weight: number;
  constructor(source: Node<T>, target: Node<T>, weight: number = 1) {
    this.source = source;
    this.target = target;
    this.weight = weight;
  }
}

class DirectedGraph<T> {
  nodes: Map<symbol, Node<T>>;
  edges: Map<symbol, Edge<T>[]>;
  constructor() {
    this.nodes = new Map(); // Map Node ID to Node object
    this.edges = new Map(); // Map Node ID to list of Edge objects
  }

  addNode(value: T) {
    const node = new Node(value);
    if (!this.nodes.has(node.id)) {
      this.nodes.set(node.id, node);
      this.edges.set(node.id, []); // Initialize with an empty list of edges
    }
    return node;
  }

  addEdge(source: Node<T>, target: Node<T>, weight = 1) {
    if (!this.nodes.has(source.id) || !this.nodes.has(target.id)) {
      throw new Error("Both source and target nodes must exist in the graph");
    }
    const edge = new Edge(source, target, weight);
    // this.edges.get(source.id).push(edge);
    const currentEdges = this.edges.get(source.id);
    if (currentEdges) {
      currentEdges.push(edge);
    } else {
      // this.edges.set(source.id, [edge]);
      throw new Error("Source node does not exist in the graph");
    }
  }

  // getNeighbors(node) {
  //   if (!this.nodes.has(node.id)) {
  //     throw new Error("Node must exist in the graph");
  //   }
  //   return this.edges.get(node.id).map((id) => this.nodes.get(id));
  // }

  getNeighbors(node: Node<T>) {
    if (!this.nodes.has(node.id)) {
      throw new Error("Node must exist in the graph");
    }
    // Correctly retrieving the target nodes from edge objects
    // return this.edges
    // .get(node.id)
    // .map((edge) => this.nodes.get(edge.target.id));
    const currentEdges = this.edges.get(node.id);
    if (currentEdges) {
      return currentEdges.map((edge) => edge.target);
    } else {
      throw new Error("Node does not have any neighbors");
    }
  }

  display() {
    this.edges.forEach((neighbors, nodeId) => {
      const fromNode = this.nodes.get(nodeId);
      if (!fromNode) {
        throw new Error("Node must exist in the graph");
      }

      const neighborList = neighbors
        .map((edge) => {
          // this.nodes.get(edge.id).value
          const targetNode = this.nodes.get(edge.target.id);
          if (targetNode) {
            return targetNode.value;
          } else {
            throw new Error("Target node does not exist in the graph");
          }
        })
        .join(", ");
      console.log(`${fromNode.value} -> ${neighborList}`);
    });
  }

  topologicalSort() {
    let stack: Node<T>[] = [];
    let visited = new Set();

    // Helper function to recursively perform DFS
    const dfs = (node: Node<T>) => {
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

  dijkstra(startValue: T, endValue: T) {
    // let distances = {};
    let distances: Map<T, number> = new Map();
    // let prev = {};
    let prev: Map<T, T | null> = new Map();
    let pq = new PriorityQueue<T, number>(); // Assume we have a priority queue implementation

    this.nodes.forEach((node) => {
      // distances[node.value] = Infinity;
      distances.set(node.value, Infinity);
      // prev[node.value] = null;
      prev.set(node.value, null);
      pq.enqueue(node.value, Infinity);
    });

    // distances[startValue] = 0;
    distances.set(startValue, 0);
    pq.enqueue(startValue, 0);

    while (!pq.isEmpty()) {
      let { element: value } = pq.dequeue();
      let currentNode = [...this.nodes.values()].find(
        (node) => node.value === value
      );
      if (!currentNode) {
        throw new Error("Current node does not exist in the graph");
      }
      this.getNeighbors(currentNode).forEach((neighbor) => {
        // let alt = distances[value] + this.getEdgeWeight(currentNode, neighbor);
        console.log("distances", distances);
        console.log("value", value);
        console.log("distances.get(value)", distances.get(value));
        let distanceGetValue = distances.get(value);
        if (distanceGetValue===undefined) {
          throw new Error("Distance value does not exist in the graph");
        }
        let alt = distanceGetValue + this.getEdgeWeight(currentNode, neighbor);
        // if (alt < distances[neighbor.value]) {
        if (alt < (distances.get(neighbor.value) || Infinity)) {
          // distances[neighbor.value] = alt;
          distances.set(neighbor.value, alt);
          // prev[neighbor.value] = value;
          prev.set(neighbor.value, value);
          // pq.enqueue(neighbor.value, distances[neighbor.value]);
          pq.enqueue(neighbor.value, distances.get(neighbor.value) || Infinity);
        }
      });
    }

    // Extract the shortest path
    let path = [];
    // for (let at = endValue; at != null; at = prev[at]) {
    for (let at = endValue; at != null; at = prev.get(at) as T) {
      // path.push(at);
      if (at) path.push(at);
    }
    path.reverse();

    if (path.length < 2) {
      // Means no path exists
      console.log("No path found from", startValue, "to", endValue);
      return;
    }

    console.log(
      // `Shortest path from ${startValue} to ${endValue}: ${path.join(
      //   " -> "
      // )} with total distance: ${distances[endValue]}`
      `Shortest path from ${startValue} to ${endValue}: ${path.join(
        " -> "
      )} with total distance: ${distances.get(endValue)}`
    );
  }

  getEdgeWeight(sourceNode: Node<T>, targetNode: Node<T>) {
    // Assumes an edge object contains a `weight` property. Adjust based on actual implementation
    if (!sourceNode || !targetNode) {
      console.error("sourceNode or targetNode is undefined");
      return Infinity;
    }
    // let edge = this.edges
    //   .get(sourceNode.id)
    //   .find((edge) => edge.target.id === targetNode.id);

    const currentEdges = this.edges.get(sourceNode.id);

    if (!currentEdges) {
      console.error("Current edges is undefined");
      return Infinity;
    }

    let edge = currentEdges.find((edge) => edge.target.id === targetNode.id);

    return edge ? edge.weight : Infinity;
  }
}

export default DirectedGraph;
