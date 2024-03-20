class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
  // Create two new linked lists from a single linked list
  // The first one will contain the first half of the elements
  // The second one will contain the second half
  // The original linked list should not be modified
  split() {
    let slow = this.head;
    let fast = this.head;
    let first = new LinkedList();
    while (fast && fast.next) {
      first.append(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }
    let second = new LinkedList();
    while (slow) {
      second.append(slow.value);
      slow = slow.next;
    }
    return [first, second];
  }
  halve() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(prev);
    const second = new LinkedList();
    second.head = slow;
    second.tail = this.tail;
    this.tail = prev;
    this.tail.next = null;
    return second;
  }
}

export { LinkedList, Node };
