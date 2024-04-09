# Longest Path Algorithm in Acyclic DAGs

## Introduction

In acyclic digraphs (directed acyclic graphs or DAGs), finding the longest path between two vertices is a problem that can be solved efficiently, unlike in general graphs where it is NP-hard. This is because DAGs do not contain cycles, allowing us to use dynamic programming techniques based on topological sorting of the vertices. Here's how the algorithm generally works:

### Algorithm Overview

1. **Topological Sort**: The first step is to perform a topological sort on the DAG. Topological sorting orders the vertices of a DAG in a linear order such that for every directed edge \(uv\) from vertex \(u\) to vertex \(v\), \(u\) comes before \(v\) in the ordering. This step is crucial because it ensures that when we consider a vertex, we have already considered all of its predecessors.

2. **Initialization**: Initialize the distances to all vertices as negative infinity and then set the distance to the source vertex as 0. This is because the longest path to the source vertex from itself is 0.

3. **Relaxation**: Process each vertex in the topologically sorted order. For every vertex \(u\), consider all its adjacent vertices \(v\). For every \(v\), if the distance to \(v\) is less than the distance to \(u\) plus the weight of the edge \(uv\), update the distance to \(v\) to be the distance to \(u\) plus the weight of the edge \(uv\). This step is similar to the relaxation step in the shortest path algorithms but is aimed at maximizing the path length instead of minimizing it.

### Pseudocode

Here's the pseudocode for finding the longest path in a DAG:

```plaintext
function longestPath(DAG, s)
    topOrder = topologicalSort(DAG)
    distance = array of size DAG.V with all values as -∞
    distance[s] = 0

    for each vertex u in topOrder
        for each vertex v adjacent to u
            if distance[v] < distance[u] + weight(u, v)
                distance[v] = distance[u] + weight(u, v)

    return distance
```

- `DAG` is the directed acyclic graph.
- `s` is the source vertex.
- `topOrder` is the list of vertices in topological order.
- `distance` is an array where `distance[v]` holds the length of the longest path from `s` to `v`.

### Key Points

- This algorithm only works for DAGs. If the graph contains a cycle, a topological sort is not possible, and hence the algorithm cannot be applied.
- The time complexity is \(O(V+E)\), where \(V\) is the number of vertices and \(E\) is the number of edges in the graph. This efficiency comes from the linear nature of the topological sort and the single pass needed through the graph to relax the edges.
- This method can be adapted to track the actual path, not just its length, by maintaining a predecessor array alongside the distance array.

This approach is widely used in scheduling problems, optimization tasks, and various applications where a sequence of tasks must be performed without violating any precedence constraints.

## Topological Sorting

Topological sorting is a linear ordering of vertices in a directed graph such that for every directed edge \(u \rightarrow v\), vertex \(u\) comes before \(v\) in the ordering. This sort is particularly useful in scheduling tasks, organizing dependencies, and other applications where a sequence of interconnected steps must be performed. It is applicable only to Directed Acyclic Graphs (DAGs) since the presence of a cycle would mean there is no linear ordering that can satisfy the above condition.

There are two common algorithms for topological sorting:

### 1. Breadth-First Topological Sort (BFTOPSORT)
This algorithm uses a queue to keep track of vertices with no incoming edges (in-degree of 0). It works as follows:

- Initialize a queue and an array to count in-degrees of all vertices. Fill this array with the in-degrees of respective vertices.
- Add all vertices with an in-degree of 0 to the queue.
- While the queue is not empty:
  - Dequeue a vertex and add it to the topological sort order.
  - For each outgoing edge from this vertex, reduce the in-degree of the target vertex by 1.
  - If the in-degree of the target vertex becomes 0, add it to the queue.

### 2. Depth-First Topological Sort (DFTOPSORT)
This approach uses Depth-First Search (DFS) to achieve the topological ordering. It works as follows:

- For each vertex, if it has not been visited, perform a DFS from it.
- During DFS, for every visited vertex \(v\), after all edges from \(v\) have been considered and before the recursive call returns, add \(v\) to the front of a list.
- The list will contain the vertices in topologically sorted order.

### Implementation Details and Complexity

- The **BFTOPSORT** algorithm is particularly useful when you are interested in processing vertices in layers, based on their in-degree. It has a time complexity of \(O(V + E)\), where \(V\) is the number of vertices and \(E\) is the number of edges.
  
- The **DFTOPSORT** algorithm, on the other hand, is more straightforward and easier to implement recursively. It also has a time complexity of \(O(V + E)\).

### Conclusion
Topological sorting provides a powerful tool for scheduling and organizing tasks. The choice between breadth-first and depth-first approaches depends on the specific requirements of the application and the programmer’s preference for either a recursive (DFS) or iterative (BFS) implementation【19†source】.

## `DFTOPSORT`

Here's the pseudocode for a Depth-First Topological Sort (DFTOPSORT), which utilizes depth-first search (DFS) to achieve topological sorting of a Directed Acyclic Graph (DAG):

```plaintext
Algorithm DFTOPSORT(G)
    // G is the directed graph
    // n is the number of vertices in G
    
    // Initialization
    for each vertex u in G
        visited[u] := false
    L := empty list that will contain the sorted elements
    
    // Function to visit nodes
    function visit(u)
        if not visited[u] then
            visited[u] := true
            for each vertex v adjacent to u
                visit(v)
            prepend u to L // adds u to the beginning of L
    
    // Main loop
    for each vertex u in G
        visit(u)
    
    return L
```

This algorithm starts with an unvisited vertex and performs a DFS, marking vertices as visited. After visiting all vertices reachable from a given vertex, it prepends that vertex to the list \(L\), effectively placing it in the topological order. This process is repeated for all vertices in the graph, ensuring that a vertex is placed in the list only after all vertices it points to (i.e., all vertices that should come after it in the topological order) have been placed.

The key idea behind the Depth-First Topological Sort is to use the DFS's property of reaching the deepest unvisited nodes first, ensuring that each node is positioned before all the nodes it has paths to, respecting the topological ordering constraint of a DAG.

## Example

Let's consider a simple Directed Acyclic Graph (DAG) to illustrate the Depth-First Topological Sort (DFTOPSORT) process. The graph will consist of 6 vertices (A, B, C, D, E, F) and edges that represent dependencies between these vertices. The edges are directed from one vertex to another, indicating that one task must be completed before another can begin.

Here's a simple example:

```
A --> B
A --> C
B --> D
C --> D
D --> E
```

In this graph, the task at vertex A must be completed before tasks at B and C can begin. Similarly, tasks at B and C must be completed before D, and D must be completed before E.

### Applying DFTOPSORT

1. **Initialization**: None of the vertices are visited at the start.

2. **Visiting Vertices**:
   - Start with vertex A (since it's one of the sources). Mark A as visited and explore its neighbors (B and C).
   - Visit B (from A), mark B as visited, and explore its neighbor (D).
   - Visit D (from B), mark D as visited, and explore its neighbor (E).
   - Visit E (from D), mark E as visited. E has no outgoing edges, so prepend E to L (L = [E]).
   - Return to D, then to B. Both have no more unvisited neighbors, so prepend D to L (L = [D, E]), then B (L = [B, D, E]).
   - Return to A, visit C (since it was unvisited). Mark C as visited, and its neighbor D is already visited, so prepend C to L (L = [C, B, D, E]).
   - Finally, prepend A to L (L = [A, C, B, D, E]).

3. **Result**: The topological order of the vertices is [A, C, B, D, E], indicating the order in which tasks can be performed while respecting their dependencies.

This simplified example demonstrates how DFTOPSORT explores each vertex and its dependencies deeply before adding the vertex to the topological ordering, ensuring that all prerequisites are met for a task before it's scheduled.

Given the topological sort result [A, C, B, D, E] from our example, let's apply the longest path algorithm to find the longest path in the DAG. We'll assume each edge has a weight of 1 for simplicity, but the algorithm works with any non-negative weights.

### Step-by-Step Application of the Longest Path Algorithm

1. **Graph Representation**: Our graph, based on the given dependencies, is represented as follows:

```
A --> B
A --> C
B --> D
C --> D
D --> E
```

2. **Topological Order**: From the previous explanation, we have the topological order as [A, C, B, D, E].

3. **Initialization**: Initialize distances to all nodes as negative infinity to represent that they are initially unreachable. Set the distance to the source node (A) to 0, as the longest path to itself is 0.

```
distance[A] = 0
distance[B] = -∞
distance[C] = -∞
distance[D] = -∞
distance[E] = -∞
```

4. **Relaxation Process**: Follow the topological order to relax the edges.

   - Starting with **A**:
     - Relax edge A -> B: distance[B] = max(distance[B], distance[A] + 1) = 1
     - Relax edge A -> C: distance[C] = max(distance[C], distance[A] + 1) = 1

   - Next, **C** (although C and B can be processed in any order as per the topological sort):
     - Relax edge C -> D: distance[D] = max(distance[D], distance[C] + 1) = 2

   - Then, **B**:
     - Relax edge B -> D again, but distance[D] is already 2, which is not less than distance[B] + 1 (=2), so no change.

   - Next, **D**:
     - Relax edge D -> E: distance[E] = max(distance[E], distance[D] + 1) = 3

5. **Final Distances**: After the relaxation process, the distances array represents the length of the longest paths from A to every other vertex:

```
distance[A] = 0
distance[B] = 1
distance[C] = 1
distance[D] = 2
distance[E] = 3
```

6. **Result Interpretation**: The longest path from A to E is of length 3. This means the longest sequence of dependencies from A to E takes three steps, following the path A -> C -> D -> E or A -> B -> D -> E (since the path lengths are the same).

### Conclusion

The longest path algorithm efficiently calculates the maximum distance (or the longest path) from a source vertex to all other vertices in a DAG, given a topological ordering. This example illustrates how the algorithm systematically updates distances based on the graph's structure and the edge weights, ensuring that the longest path length respects the direction and weight of the edges.