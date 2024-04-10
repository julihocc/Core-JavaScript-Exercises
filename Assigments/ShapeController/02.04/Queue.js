class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #length = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
    this.#length++;
    console.log("enqueue", value);
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    if (this.head === null) {
      this.#length = 0;
      return null;
    }
    this.#length--;
    const value = this.head.value;
    console.log("dequeue", value);
    this.head = this.head.next;
    return value;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }
  get length() {
    return this.#length;
  }
}

export default Queue;
