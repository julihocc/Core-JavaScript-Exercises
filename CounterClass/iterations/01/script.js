import {CounterAbstractClass, RegularCounter, RegularRomanCounter, StepCounter, StepRomanCounter} from "./Counter.js";
 
try{
  const counter = new CounterAbstractClass();
 } catch (e) {
  console.error(e.message);
 }

const regularCounter = new RegularCounter(2);
regularCounter.increment();
regularCounter.increment();
regularCounter.increment();
regularCounter.decrement();
console.log(regularCounter.countFormatted());
regularCounter.reset();
console.log(regularCounter.count);

const regularRomanCounter = new RegularRomanCounter();
console.log(regularRomanCounter.countFormatted());
regularRomanCounter.increment();
regularRomanCounter.increment();
regularRomanCounter.decrement();
console.log(regularRomanCounter.countFormatted());
regularRomanCounter.reset();
console.log(regularRomanCounter.countFormatted());

const stepCounter = new StepCounter(2);
console.log(stepCounter.countFormatted());
stepCounter.increment();
stepCounter.increment();
stepCounter.decrement();
console.log(stepCounter.countFormatted());
stepCounter.reset();
console.log(stepCounter.countFormatted());

const stepCounterHex = new StepCounter(32, 16);
console.log(stepCounterHex.countFormatted());
stepCounterHex.increment();
stepCounterHex.increment();
stepCounterHex.decrement();
console.log(stepCounterHex.countFormatted());
stepCounterHex.reset();
console.log(stepCounterHex.countFormatted());

const stepCounterRoman = new StepRomanCounter(5);
console.log(stepCounterRoman.countFormatted());
stepCounterRoman.increment();
stepCounterRoman.increment();
stepCounterRoman.decrement();
console.log(stepCounterRoman.countFormatted());
stepCounterRoman.reset();
console.log(stepCounterRoman.countFormatted());