import { LinkedList } from "./LinkedList.js";

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.append(value);
    return this;
  }

  *[Symbol.iterator]() {
    yield* this.linkedList;
  }

  pop() {
    let current = this.linkedList.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return current.value;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1).push(2).push(3);
console.log([...stack]); // [1, 2, 3]
console.log(stack.pop()); // 3
console.log([...stack]); // [1, 2]
