export default class Episode {
  constructor(action) {
    this.action = action;
    this.next = null;
    this.prev = null;
    this.position = null;
  }
  toString() {
    const response = JSON.stringify(this.action) || "No action";
    return `${this.position}: ${response}`;
  }
  setAfter(episode) {
    this.next = episode.next;
    this.position = episode.position + 1;
    episode.next = this;
    this.prev = episode;

    let current = this;
    while (current.next) {
      current = current.next;
      current.position++;
    }
    return current;
  }
}
