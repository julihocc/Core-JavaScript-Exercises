type Item<T, P> = { element: T; priority: P };
type Index = number;

class PriorityQueue<T, P> {
  items: Item<T, P>[];
  constructor() {
    this.items = [];
  }

  // Swap elements at the indices i and j
  swap(i: Index, j: Index) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  // Returns the index of the parent node
  parentIndex(index: Index) {
    return Math.floor((index - 1) / 2);
  }

  // Returns the index of the left child node
  leftChildIndex(index: Index) {
    return 2 * index + 1;
  }

  // Returns the index of the right child node
  rightChildIndex(index: Index) {
    return 2 * index + 2;
  }

  // Returns true if the node at index has a parent
  hasParent(index: Index) {
    return this.parentIndex(index) >= 0;
  }

  // Returns true if the node at index has a left child
  hasLeftChild(index: Index) {
    return this.leftChildIndex(index) < this.items.length;
  }

  // Returns true if the node at index has a right child
  hasRightChild(index: Index) {
    return this.rightChildIndex(index) < this.items.length;
  }

  // Bubble up the element at the index
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.hasParent(index) &&
      this.items[this.parentIndex(index)].priority > this.items[index].priority
    ) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  // Bubble down the element at the index
  bubbleDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.items[this.rightChildIndex(index)].priority <
          this.items[smallerChildIndex].priority
      ) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      if (this.items[index].priority < this.items[smallerChildIndex].priority) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  // Enqueue element with a priority
  enqueue(element: T, priority: P) {
    const item: Item<T, P> = { element, priority };
    this.items.push(item);
    this.bubbleUp();
  }

  // Dequeue the element with the highest priority
  dequeue() {
    if (this.items.length === 0) {
      throw new Error("PriorityQueue is empty");
    }
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

export default PriorityQueue;
