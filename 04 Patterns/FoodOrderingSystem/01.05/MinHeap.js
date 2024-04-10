export default class MinHeap {
  constructor() {
    this.heap = []; // Initialize an empty array to store the heap
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(order) {
    this.heap.push(order);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index !== 0 &&
      this.heap[this.getParentIndex(index)].priority > this.heap[index].priority
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown(index = 0) {
    let smallest = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // FIXME: Implement this method as a geter
  size() {
    return this.heap.length;
  }

  // TODO Implement a .find(callback) method that returns the first order that satisfies the callback
  find(callback) {
    return this.heap.find(callback);
  }
}
