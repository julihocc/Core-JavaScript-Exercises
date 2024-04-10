export default class MinHeap {
    heap;
    constructor() {
        // Initialize a heap with an empty array
        this.heap = [];
    }
    // Method to get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    // Method to get the index of the left child node
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    // Method to get the index of the right child node
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    // Method to swap two nodes in the heap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    // Method to add a new element to the heap
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        let parentIndex = this.getParentIndex(index);
        // Bubble up the new element as needed to maintain the heap property
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }
    // Method to remove and return the smallest element from the heap
    remove() {
        if (this.heap.length === 0)
            return undefined;
        // Swap the first and last element
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop(); // Remove the smallest element
        // Bubble down the element at index 0 to its proper position
        this.heapify(0);
        return min;
    }
    // Helper method to maintain the heap property by bubbling down the element at given index
    heapify(index) {
        let smallest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapify(smallest);
        }
    }
}
