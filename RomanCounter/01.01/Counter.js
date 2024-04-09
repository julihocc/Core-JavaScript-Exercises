import RomanNumerals from './RomanNumerals.js';

export default class Counter {
  #count;
  #step;
  #base;
  #romanNumerals = new RomanNumerals()

  prefix = {
    "10": "",
    "2": "0b",
    "8": "0o",
    "16": "0x", 
    "R": "0r"
  }

  constructor(count=0, step=1, base=10) { 
    this.#count = count;
    this.#step = step;
    this.#base = base;
  }

  increment() {
    this.#count += this.#step;
    console.log(`this.#count: ${this.#count}`);
  }

  decrement() {
    this.#count -= this.#step;
    console.log(`this.#count: ${this.#count}`);
  }

  countFormatted() {
    let prefix = this.prefix[this.#base];
    const sign = this.#count < 0 ? "-" : "";
    console.log(`sign: ${sign}`);
    const absCount = Math.abs(this.#count);
    console.log(`absCount: ${absCount}`);
    if (this.#base === "R") {
      return sign + prefix + this.#romanNumerals.toRoman(absCount);
    }
    return sign + prefix + absCount.toString(this.#base).toUpperCase();
  }

  reset() {
    this.#count = 0;
    this.#step = 1;
    this.#base = 10;
  }

  get count() {
    return this.#count;
  }

  get base() {
    return this.#base;
  }

  set base(base) {
    this.#base = base;
  }

  get step() {
    return this.#step;
  }

  set step(step) {
    this.#step = parseInt(step);
  }
}

const counter = new Counter(0, 8,  "R");
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count); // 0x0