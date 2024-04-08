declare class Node<T> {
    value: T;
    id: symbol;
    constructor(value: T);
}
declare class Edge<T> {
    source: Node<T>;
    target: Node<T>;
    weight: number;
    constructor(source: Node<T>, target: Node<T>, weight?: number);
}
declare class DirectedGraph<T> {
    nodes: Map<symbol, Node<T>>;
    edges: Map<symbol, Edge<T>[]>;
    constructor();
    addNode(value: T): Node<T>;
    addEdge(source: Node<T>, target: Node<T>, weight?: number): void;
    getNeighbors(node: Node<T>): Node<T>[];
    display(): void;
    topologicalSort(): T[];
    dijkstra(startValue: T, endValue: T): void;
    getEdgeWeight(sourceNode: Node<T>, targetNode: Node<T>): number;
}
export default DirectedGraph;
//# sourceMappingURL=DirectedGraph.d.ts.map