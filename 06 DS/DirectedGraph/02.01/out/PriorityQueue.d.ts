type Item<T, P> = {
    element: T;
    priority: P;
};
type Index = number;
declare class PriorityQueue<T, P> {
    items: Item<T, P>[];
    constructor();
    swap(i: Index, j: Index): void;
    parentIndex(index: Index): number;
    leftChildIndex(index: Index): number;
    rightChildIndex(index: Index): number;
    hasParent(index: Index): boolean;
    hasLeftChild(index: Index): boolean;
    hasRightChild(index: Index): boolean;
    bubbleUp(): void;
    bubbleDown(): void;
    enqueue(element: T, priority: P): void;
    dequeue(): Item<T, P>;
    isEmpty(): boolean;
}
export default PriorityQueue;
//# sourceMappingURL=PriorityQueue.d.ts.map