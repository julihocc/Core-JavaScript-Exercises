import Node from "./Node.js";

export default class Graph<T> {
  nodes: Map<symbol, Node<T>>;
  edges: Map<symbol, { node: Node<T>; weight: number }[]>;
  isDirected: boolean;
  constructor(isDirected = false) {
    this.nodes = new Map();
    this.edges = new Map();
    this.isDirected = isDirected;
  }

  addNode(value: T) {
    const node = new Node(value);
    this.nodes.set(node.id, node);
    this.edges.set(node.id, []);
    return node;
  }

  addEdge(node1: Node<T>, node2: Node<T>, weight: number = 1) {
    if (!this.nodes.has(node1.id) || !this.nodes.has(node2.id)) {
      throw new Error("Both nodes must exist in the graph");
    }

    // this.edges.get(node1.id).push({ node: node2, weight });
    const edges1 = this.edges.get(node1.id);
    if (edges1) {
      edges1.push({ node: node2, weight });
    } else {
      throw new Error("Edges must exist in the graph");
    }

    if (!this.isDirected) {
      // this.edges.get(node2.id).push({ node: node1, weight });
      const edges2 = this.edges.get(node2.id);
      if (edges2) {
        edges2.push({ node: node1, weight });
      } else {
        throw new Error("Edges must exist in the graph");
      }
    }
  }

  getNeighbors(node: Node<T>) {
    if (!this.nodes.has(node.id)) {
      throw new Error("Node must exist in the graph");
    }
    const edgesForCurrentNode = this.edges.get(node.id);
    if (!edgesForCurrentNode) {
      throw new Error("Edges must exist in the graph");
    }
    return edgesForCurrentNode.map((edge) => ({
      node: edge.node,
      weight: edge.weight,
    }));
  }

  display() {
    this.edges.forEach((edges, nodeId) => {
      const fromNode = this.nodes.get(nodeId);
      if (!fromNode) {
        throw new Error("Node must exist in the graph");
      }
      const neighbors = edges.map(
        (edge) => `${edge.node.value}(weight: ${edge.weight})`
      );
      console.log(`${fromNode.value} => ${neighbors.join(", ")}`);
    });
  }

  dfs(startNode: Node<T>, visited = new Set(), values = new Set()) {
    if (!startNode) {
      return values;
    }

    visited.add(startNode.id);
    values.add(startNode.value);

    const neighbors = this.getNeighbors(startNode);

    for (const { node } of neighbors) {
      if (!visited.has(node.id)) {
        this.dfs(node, visited, values);
      }
    }

    return values;
  }

  findPath(
    startNode: Node<T>,
    endNode: Node<T>,
    visited: Set<Symbol> = new Set(),
    path: T[] = []
  ): T[] | null {
    visited.add(startNode.id);
    path.push(startNode.value);

    if (startNode.id === endNode.id) {
      return path;
    }

    const neighbors = this.getNeighbors(startNode);
    for (const { node } of neighbors) {
      if (!visited.has(node.id)) {
        const resultPath = this.findPath(node, endNode, visited, path);
        if (resultPath) return resultPath;
      }
    }

    path.pop();
    return null;
  }
}
