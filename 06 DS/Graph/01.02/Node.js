export default class Node {
  constructor(value) {
    this.value = value;
    this.id = Symbol(); // Unique identifier for the node
  }
}
