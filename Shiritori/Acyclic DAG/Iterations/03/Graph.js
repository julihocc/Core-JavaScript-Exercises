export default class Graph {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v, capacity) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push({ v, capacity, flow: 0 });
  }

  bfs(s, t, parent) {
    let visited = new Map();
    for (let vertex of this.adj.keys()) {
      visited.set(vertex, false);
    }
    let queue = [];
    queue.push(s);
    visited.set(s, true);
    parent.set(s, -1);

    while (queue.length != 0) {
      let u = queue.shift();
      for (let { v, capacity, flow } of this.adj.get(u)) {
        if (!visited.get(v) && capacity > flow) {
          queue.push(v);
          parent.set(v, u);
          visited.set(v, true);
        }
      }
    }
    return visited.get(t) === true;
  }

  fordFulkerson(s, t) {
    let parent = new Map();
    let max_flow = 0;

    while (this.bfs(s, t, parent)) {
      let path_flow = Number.MAX_VALUE;
      for (let v = t; v !== s; v = parent.get(v)) {
        let u = parent.get(v);
        let edge = this.adj.get(u).find((edge) => edge.v === v);
        path_flow = Math.min(path_flow, edge.capacity - edge.flow);
      }

      for (let v = t; v !== s; v = parent.get(v)) {
        let u = parent.get(v);
        let edge = this.adj.get(u).find((edge) => edge.v === v);
        edge.flow += path_flow;
        let reverseEdge = this.adj.get(v).find((edge) => edge.v === u);
        if (reverseEdge) {
          reverseEdge.flow -= path_flow;
        } else {
          this.adj.get(v).push({ v: u, capacity: 0, flow: -path_flow });
        }
      }

      max_flow += path_flow;
    }

    return max_flow;
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

    // Return the distance from the source to the target node
    return dist.get(t);
  }
}
