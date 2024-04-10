// Class representing the history of actions in an application,
// for implementing undo and redo functionality.

class Action {
  constructor(action) {
    this.action = action;
    this.next = null;
    this.prev = null;
  }
}

class History {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addAction(action) {
    if (this.head === null) {
      this.head = action;
      this.tail = action;
      this.current = action;
    } else {
      this.current.next = action;
      action.prev = this.current;
      this.current = action;
      this.tail = action;
    }
  }

  undo() {
    if (this.current.prev === null) {
      return null;
    }
    this.current = this.current.prev;
    return this.current.action;
  }

  redo() {
    if (this.current.next === null) {
      return null;
    }
    this.current = this.current.next;
    return this.current.action;
  }
}

export default History;
