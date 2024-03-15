const RomanNumerals = require('./RomanNumerals');
const Counter = require('./Counter');

const romanNumerals = new RomanNumerals();
console.log(romanNumerals.toRoman(1994)); // Should print "MCMXCIV"
console.log(romanNumerals.fromRoman("MCMXCIV")); // Should print 1994

const counter = new Counter();
console.log(counter.count); // Should print "0"
counter.increment();
console.log(counter.count); // Should print "1"
counter.decrement();
console.log(counter.count); // Should print "0"

class RomanCounter extends Counter {
  #romanNumerals = new RomanNumerals();
  constructor() {
    super(10, 1);    
  }
  get count() {
    return this.#romanNumerals.toRoman(super.count);
  }
}

const romanCounter = new RomanCounter();
for (let i = 0; i < 10; i++) {
  console.log(romanCounter.count);
  romanCounter.increment();
}

try {
  romanNumerals.toRoman(4000)
} catch(e) {
  console.error(e.message)
}