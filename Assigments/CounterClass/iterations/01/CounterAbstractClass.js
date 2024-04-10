export default class CounterAbstractClass {
  #count;
  #step;
  #base;

  static prefix = {
    10: "",
    2: "0b",
    8: "0o",
    16: "0x",
    R: "0r",
  };

  constructor(count, step, base) {
    console.log(`New instance of ${this.constructor.name} created`);

    this.#count = count;
    this.#step = step;
    this.#base = base;

  }

  get count() {
    return this.#count;
  }

  set count(count) {
    // Verify if count is a non-negative integer
    if (!Number.isInteger(count) ) {
      throw new Error("Count must be an integer");
    }
    this.#count = parseInt(count);
  }

  get base() {
    return this.#base;
  }

  get step() {
    return this.#step;
  }

  set step(step) {
    // Verify if step is a non-negative integer
    if (!Number.isInteger(step) || step < 0) {
      throw new Error("Step must be a non-negative integer");
    }
    this.#step = parseInt(step);
  }

  static unitaryIncrement() {
    this.count += 1;
  }

  static unitaryDecrement() {
    this.count -= 1;
  }

  increment() {
    throw new Error("Method increment not implemented");
  }

  decrement() {
    throw new Error("Method decrement not implemented");
  }

  reset() {
    throw new Error("Method reset not implemented");
  }

  countFormatted() {
    throw new Error("Method countFormatted not implemented");
  }
}
