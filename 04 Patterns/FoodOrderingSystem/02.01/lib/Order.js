export default class Order {
    #id = null;
    items;
    isTaken;
    priority;
    constructor(items) {
        this.items = items;
        this.isTaken = false;
        this.priority = Date.now();
    }
    get id() {
        return this.#id;
    }
    set id(value) {
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
