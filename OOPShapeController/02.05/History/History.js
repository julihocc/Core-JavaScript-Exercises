// Class representing the history of actions in an application,
// for implementing undo and redo functionality.
import Episode from "./Episode.js";

class History {
  #length = 0;
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  get length() {
    return this.#length;
  }

  initHistory(action) {
    const episode = new Episode(action);
    episode.position = 1;
    this.head = episode;
    this.tail = episode;
    this.current = episode;
    this.#length++;
  }

  deleteHistoryFromHere(episode) {
    episode.next = null;
    this.tail = episode;
    this.#length = episode.position;
  }

  push(action) {
    if (this.head === null) {
      this.initHistory(action);
    } else {
      // const episode = this.setActionAsCurrent(action);
      // this.setEpisodeAsTail(episode);
      const episode = new Episode(action);
      this.tail = episode.setAfter(this.current);
      this.current = episode;
      this.deleteHistoryFromHere(this.current);
    }
  }

  moveBackward() {
    if (this.current === this.head) {
      this.current = new Episode(null);
      this.current.next = this.head;
      this.current.position = 0;
    } else if (this.current.prev) {
      this.current = this.current.prev;
    }
    return this;
  }

  moveForward() {
    if (this.current == this.tail) {
      this.current = new Episode(null);
      this.current.prev = this.tail;
      this.current.position = this.tail.position + 1;
    }
    if (this.current.next) {
      this.current = this.current.next;
    }
    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.next;
    }
  }

  toString() {
    return [...this].map((e) => e.toString()).join(", ");
  }
}

export default History;
