import CounterAbstractClass from './CounterAbstractClass.js';

export default class RegularCounter extends CounterAbstractClass {

  constructor(base=10) {
    super(0, 1, base);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
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