// Class representing the history of actions in an application,
// for implementing undo and redo functionality.
import Episode from "./Episode.js";

class History {
  #head;
  #tail;

  constructor() {
    this.#head = new Episode(null);
    this.#head.position = -1;
    this.#head.prev = Episode.NULL;
    this.#tail = new Episode(null);
    this.#tail.position = 0;
    this.#tail.next = Episode.NULL;
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
    this.current = this.#head;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get length() {
    return this.#tail.position;
  }

  insert(action) {
    const a = this.current;
    const b = new Episode(action);
    const c = this.tail;
    b.position = a.position + 1;
    c.position = b.position + 1;
    b.prev = a;
    b.next = c;
    a.next = b;
    c.prev = b;
    this.current = b;
    return this;
  }

  moveBackward() {
    if (this.current.prev !== this.head) {
      this.current = this.current.prev;
    }
    return this;
  }

  moveForward() {
    if (this.current.next !== this.tail) {
      this.current = this.current.next;
    }
    return this;
  }

  isFirst(episode) {
    return this.head.next === episode;
  }

  isLast(episode) {
    return this.tail.prev === episode;
  }

  *[Symbol.iterator]() {
    let current = this.head.next;
    while (current !== this.tail) {
      yield current;
      current = current.next;
    }
  }

  toString() {
    const elements = [...this].map((e) => e.toString()).join(", ");
    return `(Length: ${this.length}), elements: ${elements}`;
  }

  info() {
    console.log("History info:");
    const history = this;
    console.log("Current: ", history.current.toString());
    console.log("History lenght: ", history.length);
    console.log("Head: ", history.head.toString());
    // console.log("Next to head: ", history.head.next.toString());
    console.log("Tail: ", history.tail.toString());
    // console.log("Prev to tail: ", history.tail.prev.toString());
    console.log("To array:", [...history]);
    console.log("History:", history.toString());
  }
}

export default History;
