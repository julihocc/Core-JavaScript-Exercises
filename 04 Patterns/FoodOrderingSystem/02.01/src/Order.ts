import type Food from "./Food.js";

export default class Order {
  #id: number | null = null;
  items: Food[];
  isTaken: boolean;
  priority: number;
  constructor(items: Food[]) {
    this.items = items;
    this.isTaken = false;
    this.priority = Date.now() as number;
  }
  get id() {
    return this.#id;
  }
  set id(value: number | null) {
    if (this.#id !== null) {
      this.#id = value;
    }
  }
  toString() {
    return `
    Order #${this.#id}
    Items: ${this.items.map((item) => item.name).join(", ")}
    `;
  }
}
