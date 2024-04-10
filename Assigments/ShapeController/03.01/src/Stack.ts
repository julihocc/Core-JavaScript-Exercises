// Implement a stack

class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  #length = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value: T) {
    this.#length++;
    console.log("push", value);
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  pop() {
    if (this.head === null) {
      this.#length = 0;
      return null;
    }
    this.#length--;
    const value = this.head.value;
    console.log("pop", value);
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
