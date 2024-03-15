export default class Graph {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v, capacity) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push({ v, capacity, flow: 0 });
  }

  showNeighbors() {
    for (let [vertex, neighbors] of this.adj.entries()) {
      console.log(`${vertex}:`);
      for (let { v, capacity } of neighbors) {
        console.log("  ", v.toString(), capacity);
      }
    }
  }

  topologicalSort() {
    let visited = new Map();
    let stack = [];
    this.adj.forEach((_, u) => visited.set(u, false));

    const visit = (u) => {
      if (visited.get(u)) return;
      visited.set(u, true);
      const neighbors = this.adj.get(u) || [];
      neighbors.forEach(({ v }) => visit(v));
      stack.push(u);
    };

    this.adj.forEach((_, u) => {
      if (!visited.get(u)) visit(u);
    });

    return stack.reverse();
  }

  longestPathBetweenNodes(s, t) {
    let dist = new Map();
    this.adj.forEach((_, u) => dist.set(u, -Infinity));
    dist.set(s, 0);

    let order = this.topologicalSort();
    order.forEach((u) => {
      let neighbors = this.adj.get(u) || [];
      neighbors.forEach(({ v, capacity }) => {
        if (dist.get(v) < dist.get(u) + capacity) {
          dist.set(v, dist.get(u) + capacity);
        }
      });
    });

    return dist.get(t);
  }
}
