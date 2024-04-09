export default class Episode {
  static NULL = new Episode(null);

  constructor(action) {
    this.action = action;
    this.next = null;
    this.prev = null;
    this.position = null;
  }
  toString() {
    const response = JSON.stringify(this.action) || "No action";
    return `Pos: ${this.position}, action: ${response}`;
  }
}
