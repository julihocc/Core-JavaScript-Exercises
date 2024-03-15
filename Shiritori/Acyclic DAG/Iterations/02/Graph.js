export default class Graph {
  constructor() {
    this.adj = {};
  }

  addEdge(u, v, capacity) {
    if (!this.adj[u]) this.adj[u] = [];
    if (!this.adj[v]) this.adj[v] = []; // Ensure v is also initialized if needed
    this.adj[u].push({ v, capacity, flow: 0 });
    // Optionally, initialize reverse edge with 0 capacity if graph is undirected
  }

  // The BFS function remains mostly unchanged, but it now operates on the keys of the adj object
  bfs(s, t, parent) {
    let visited = {};
    Object.keys(this.adj).forEach((vertex) => (visited[vertex] = false));
    let queue = [];
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;

    while (queue.length != 0) {
      let u = queue.shift();

      for (let i = 0; i < this.adj[u].length; i++) {
        let { v, capacity, flow } = this.adj[u][i];
        if (!visited[v] && capacity > flow) {
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }

    return visited[t] == true;
  }

  // fordFulkerson method doesn't change logically, but it should handle dynamic vertices
  fordFulkerson(s, t) {
    let parent = {};
    let max_flow = 0;

    while (this.bfs(s, t, parent)) {
      let path_flow = Number.MAX_VALUE;
      for (let v = t; v != s; v = parent[v]) {
        let u = parent[v];
        let edge = this.adj[u].find((edge) => edge.v === v);
        path_flow = Math.min(path_flow, edge.capacity - edge.flow);
      }

      for (let v = t; v != s; v = parent[v]) {
        let u = parent[v];
        let edge = this.adj[u].find((edge) => edge.v === v);
        edge.flow += path_flow;
        let reverseEdge = this.adj[v].find((edge) => edge.v === u);
        if (reverseEdge) {
          reverseEdge.flow -= path_flow;
        } else {
          this.adj[v].push({ v: u, capacity: 0, flow: -path_flow });
        }
      }

      max_flow += path_flow;
    }

    return max_flow;
  }
}
