class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  #length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.#length = 0;
  }

  append(value: T): LinkedList<T> {
    this.#length++;
    const newNode = new Node<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    return this;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  split(): [LinkedList<T>, LinkedList<T>] {
    let slow = this.head;
    let fast = this.head;
    let first = new LinkedList<T>();
    while (fast && fast.next) {
      first.append(slow!.value); // Non-null assertion because slow starts from head, which is not null unless the list is empty
      slow = slow!.next; // Non-null assertion for the same reason
      fast = fast.next.next;
    }
    let second = new LinkedList<T>();
    while (slow) {
      second.append(slow.value);
      slow = slow.next;
    }
    return [first, second];
  }

  halve(): LinkedList<T> {
    let slow = this.head;
    let fast = this.head;
    let prev: Node<T> | null = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow!.next; // Non-null assertion because slow follows fast
      fast = fast.next.next;
    }
    const second = new LinkedList<T>();
    second.head = slow;
    second.tail = this.tail;
    this.tail = prev;
    if (this.tail) {
      this.tail.next = null;
    }
    second.#length = Math.ceil(this.#length / 2);
    this.#length = Math.floor(this.#length / 2);
    return second;
  }

  get length(): number {
    return this.#length;
  }

  set length(value: number) {
    this.#length = value;
  }

  lookup(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insertAfter(value: T, ...newValues: T[]): LinkedList<T> {
    let current = this.lookup(value);
    if (!current) {
      return this;
    }
    let next = current.next;
    newValues.forEach((value) => {
      this.#length++;
      const newNode = new Node<T>(value);
      current!.next = newNode; // Non-null assertion because current has been found
      current = newNode;
    });
    current.next = next;
    return this;
  }

  findByPosition(position: number): Node<T> | null {
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

  insertAtPosition(position: number, ...newValues: T[]): LinkedList<T> {
    if (position === 0) {
      newValues.reverse().forEach((value) => {
        const newNode = new Node<T>(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
          this.tail = newNode;
        }
        this.#length++;
      });
      return this;
    }

    let current = this.findByPosition(position - 1);
    if (!current) {
      return this;
    }
    let next = current.next;
    newValues.forEach((value) => {
      this.#length++;
      const newNode = new Node<T>(value);
      current!.next = newNode; // Non-null assertion because current has been found
      current = newNode;
    });
    current.next = next;
    if (!next) {
      this.tail = current;
    }
    return this;
  }

  filter(callback: (value: T) => boolean): LinkedList<T> {
    let current = this.head;
    const newList = new LinkedList<T>();
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
