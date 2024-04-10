class DoublyLinkedListNode<T> {
  value: T;
  next: DoublyLinkedListNode<T> | null = null;
  prev: DoublyLinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null = null;

  append(value: T): void {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(value: T): void {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(value: T): void {
    if (!this.head) return;

    let current: DoublyLinkedListNode<T> | null = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        return;
      }
      current = current.next;
    }
  }

  find(value: T): DoublyLinkedListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}
