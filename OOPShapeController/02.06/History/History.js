// Class representing the history of actions in an application,
// for implementing undo and redo functionality.
import Episode from "./Episode.js";

class History {
  #head;
  #tail;

  constructor() {
    this.#head = new Episode({
      direction: "hold",
      deltax: 0,
      deltay: 0,
    });
    this.#head.position = -1;
    this.#head.prev = Episode.NULL;
    this.#tail = new Episode({
      direction: "hold",
      deltax: 0,
      deltay: 0,
    });
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
    // this.#tail.position = 1;
    this.updateIndicesAfterHere(episode);
    console.log("Initialized history");
  }

  updateIndicesAfterHere(episode) {
    let current = episode.next;
    while (current !== Episode.NULL) {
      current.position = current.prev.position + 1;
      current = current.next;
    }
  }

  insert(action) {
    if (this.current === Episode.NULL || this.current === this.head) {
      this.initHistory(action);
    } else if (this.current === this.tail) {
      const episode = new Episode(action);
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
}

export default History;
