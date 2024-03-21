// Class representing the history of actions in an application,
// for implementing undo and redo functionality.

class Episode {
  constructor(action) {
    this.action = action;
    this.next = null;
    this.prev = null;
    this.position = null;
  }
  toString() {
    return `${this.position}: ${this.action.direction}`;
  }
}

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

  setActionAsCurrent(action) {
    const episode = new Episode(action);
    this.current.next = episode;
    episode.position = this.current.position + 1;
    episode.prev = this.current;
    this.current = episode;
    this.tail = episode;
    this.#length++;
    return episode;
  }

  setEpisodeAsTail(episode) {
    episode.next = null;
    this.tail = episode;
    this.#length = episode.position;
  }

  addAction(action) {
    if (this.head === null) {
      this.initHistory(action);
    } else {
      const episode = this.setActionAsCurrent(action);
      this.setEpisodeAsTail(episode);
    }
  }

  undo() {
    try {
      return this.current;
    } finally {
      this.current = this.current?History/History.js.prev;
    }
  }

  redo() {
    if (this.current.next === null) {
      return null;
    }
    this.current = this.current.next;
    return this.current;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.next;
    }
  }

  toString() {
    return [...this].map((e) => e.action.direction).join(", ");
  }
}

export default History;
