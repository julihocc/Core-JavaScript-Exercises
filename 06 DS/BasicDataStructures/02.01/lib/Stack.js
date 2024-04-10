import { LinkedList } from "./LinkedList.js";
class Stack {
  linkedList;
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
    if (this.linkedList.head === null) {
      // The stack is empty
      return undefined;
    } else if (this.linkedList.head === this.linkedList.tail) {
      // There's only one element in the stack
      const value = this.linkedList.head.value;
      this.linkedList.head = null;
      this.linkedList.tail = null;
      this.linkedList.length--; // Assuming LinkedList maintains a length property
      return value;
    } else {
      // There are multiple elements in the stack
      let current = this.linkedList.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      if (prev) prev.next = null; // Disconnect the last node
      this.linkedList.tail = prev; // Update the tail
      this.linkedList.length--; // Adjust the length
      return current.value;
    }
  }
}
// Example usage:
const stack = new Stack(); // Specify the type, e.g., number
stack.push(1).push(2).push(3);
console.log([...stack]); // [1, 2, 3]
console.log(stack.pop()); // 3
console.log([...stack]); // [1, 2]
