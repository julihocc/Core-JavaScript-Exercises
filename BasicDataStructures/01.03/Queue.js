import { LinkedList } from "./LinkedList.js";

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.append(value);
    return this;
  }

  *[Symbol.iterator]() {
    yield* this.linkedList;
  }

  dequeue() {
    const value = this.linkedList.head.value;
    this.linkedList.head = this.linkedList.head.next;
    return value;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1).enqueue(2).enqueue(3);
console.log([...queue]); // [1, 2, 3]
console.log(queue.dequeue()); // 1
console.log([...queue]); // [2, 3]
