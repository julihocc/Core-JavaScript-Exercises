export default class MinHeap<T> {
    heap: T[];
    constructor();
    getParentIndex(index: number): number;
    getLeftChildIndex(parentIndex: number): number;
    getRightChildIndex(parentIndex: number): number;
    swap(indexOne: number, indexTwo: number): void;
    insert(value: T): void;
    remove(): T | undefined;
    heapify(index: number): void;
}
//# sourceMappingURL=MinHeap.d.ts.map