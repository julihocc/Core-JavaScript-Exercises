import CounterAbstractClass from "./CounterAbstractClass.js";

export default class StepCounter extends CounterAbstractClass {
  constructor(step, base = 10) {
    super(0, step, base);
  }

  increment() {
    this.count += this.step;
  }

  decrement() {
    this.count -= this.step;
  }

  reset() {
    this.count = 0;
  }

  countFormatted() {
    const onBaseValue = this.count.toString(this.base);
    const prefix = CounterAbstractClass.prefix[this.base];
    return `${prefix}${onBaseValue}`;
  }
}