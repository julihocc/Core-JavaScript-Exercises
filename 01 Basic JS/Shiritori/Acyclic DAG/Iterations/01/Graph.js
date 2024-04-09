export default class Graph {
  constructor(V) {
    this.V = V;
    this.adj = Array.from({ length: V }, () => []);
  }

  addEdge(u, v, capacity) {
    this.adj[u].push({ v, capacity, flow: 0 });
  }

  // Returns true if there is a path from source 's' to sink 't' in residual
  // graph. Also fills parent[] to store the path
  bfs(s, t, parent) {
    let visited = Array(this.V).fill(false);
    let queue = [];
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;

    while (queue.length != 0) {
      let u = queue.shift();

      for (let i = 0; i < this.adj[u].length; i++) {
        let { v, capacity, flow } = this.adj[u][i];
        if (visited[v] == false && capacity > flow) {
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }

    // If we reached sink in BFS starting from source, then return
    // true, else false
    return visited[t] == true;
  }

  // Returns the maximum flow from s to t in the given graph
  fordFulkerson(s, t) {
    let parent = Array(this.V).fill(-1);
    let max_flow = 0; // There is no flow initially

    // Augment the flow while there is path from source to sink
    while (this.bfs(s, t, parent)) {
      // Find minimum residual capacity of the edges along the
      // path filled by BFS. Or we can say find the maximum flow
      // through the path found.
      let path_flow = Number.MAX_VALUE;
      for (let v = t; v != s; v = parent[v]) {
        let u = parent[v];
        let edge = this.adj[u].find((edge) => edge.v === v);
        path_flow = Math.min(path_flow, edge.capacity - edge.flow);
      }

      // update residual capacities of the edges and reverse edges
      // along the path
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


