class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #length = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    // [x]: Implement the length increment
    this.#length++;
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
    // [x] Recalculate the length of the list
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
    second.#length = Math.ceil(this.#length / 2);
    this.#length = Math.floor(this.#length / 2);
    return second;
  }
  get length() {
    return this.#length;
  }
  // [x] TODO 2. For regular linked list, add an element or another linked list in beteween
  //  [x] TODO 2.1. After some position
  //  [x] TODO 2.2. After some value
  lookup(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insertAfter(value, ...newValues) {
    let current = this.lookup(value);
    if (!current) {
      return this;
    }
    let next = current.next;
    newValues.forEach((value) => {
      // [x] TODO Update length
      this.#length++;
      const newNode = new Node(value);
      current.next = newNode;
      current = newNode;
    });
    current.next = next;
    return this;
  }

  findByPosition(position) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (index === position) {
        return current;
      }
      index++;
      current = current.next;
    }
    return null;
  }

  insertAtPosition(position, ...newValues) {
    let current = this.findByPosition(position);
    if (!current) {
      return this;
    }
    let next = current.next;
    newValues.forEach((value) => {
      this.#length++;
      const newNode = new Node(value);
      current.next = newNode;
      current = newNode;
    });
    current.next = next;
    return this;
  }

  // [x] TODO 3. For regular linked list, filter values and return a new list
  filter(callback) {
    let current = this.head;
    const newList = new LinkedList();
    while (current) {
      if (callback(current.value)) {
        newList.append(current.value);
      }
      current = current.next;
    }
    return newList;
  }
}

export { LinkedList, Node };
