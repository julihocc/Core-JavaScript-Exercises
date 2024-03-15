class Counter {
  #count ;
  #base ;
  constructor(base = 10, initialCount = 0) {
    this.#base = base;
    this.#count = initialCount;
  }
  increment() {
    this.#count++;
  }
  decrement() {
    this.#count--;
  }
  get count() {
    return this.#count.toString(this.#base);
  }
}

module.exports = Counter;