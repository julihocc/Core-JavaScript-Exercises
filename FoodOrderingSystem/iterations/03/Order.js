export default class Order {
  #id;
  constructor(items) {
    this.items = items;
    this.isTaken = false;
  }
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
  toString() {
    return `
    Order #${this.#id}
    Items: ${this.items.map((item) => item.name).join(", ")}
    `;
  }
}
