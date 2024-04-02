class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  #length = 0;
  head: Node<T> | null;
  tail: Node<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: T) {
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
