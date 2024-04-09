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
    this.current = Episode.NULL;
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

  get firstElement() {
    if (this.#head.next !== this.#tail) {
      return this.#head.next;
    } else {
      return Episode.NULL;
    }
  }
  get lastElement() {
    if (this.#tail.prev !== this.#head) {
      return this.#tail.prev;
    } else {
      return Episode.NULL;
    }
  }

  initHistory(action) {
    console.log("Initializing history");
    const episode = new Episode(action);
    episode.position = 0;
    episode.next = this.tail;
    episode.prev = this.head;
    this.head.next = episode;
    this.tail.prev = episode;
    this.current = episode;
    this.#tail.position = 1;
    console.log("Initialized history");
  }

  insert(action) {
    if (this.current === Episode.NULL || this.current === this.head) {
      this.initHistory(action);
    } else if (this.current === this.tail) {
      const episode = new Episode(action);
      const lastNode = this.tail.prev;
      episode.position = this.tail.position;
      this.tail.position += 1;
      episode.next = this.tail;
      episode.prev = lastNode;
      lastNode.next = episode;
      this.tail.prev = episode;
      this.current = episode;
    } else {
      const b = new Episode(action);
      const a = this.current;
      const c = this.tail;
      b.prev = a;
      b.next = this.tail;
      a.next = b;
      c.prev = b;
      this.current = b;
      b.position = a.position + 1;
      c.position = b.position + 1;
    }
    return this;
  }

  moveBackward() {
    if (this.current.prev !== Episode.NULL) {
      this.current = this.current.prev;
    }
    return this;
  }

  moveForward() {
    if (this.current.next !== Episode.NULL) {
      this.current = this.current.next;
    }
    return this;
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
