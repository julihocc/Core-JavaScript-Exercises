// Usage example
import MinHeap from './MinHeap.js';

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(4);

console.log(minHeap.heap);
console.log(minHeap.remove()); // Outputs: 3 (the smallest element)
console.log(minHeap.heap);
