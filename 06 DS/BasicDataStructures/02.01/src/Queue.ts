import { LinkedList } from "./LinkedList.js";

class Queue<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  enqueue(value: T): Queue<T> {
    this.linkedList.append(value);
    return this;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    yield* this.linkedList;
  }

  dequeue(): T | undefined {
    if (this.linkedList.head === null) {
      return undefined; // or throw an error depending on your preference
    }
    const value = this.linkedList.head.value;
    this.linkedList.head = this.linkedList.head.next;
    if (this.linkedList.head === null) {
      this.linkedList.tail = null;
    }
    this.linkedList.length--; // Assuming LinkedList has a length property that's manually managed
    return value;
  }
}

// Example usage:
const queue = new Queue<number>(); // specify the type here, for example, number
queue.enqueue(1).enqueue(2).enqueue(3);
console.log([...queue]); // [1, 2, 3]
console.log(queue.dequeue()); // 1
console.log([...queue]); // [2, 3]
