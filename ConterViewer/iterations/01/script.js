import Counter from "./Counter.js";
import { saveCounterData, restoreCounterData } from "./storage.js";

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const baseOptions = document.getElementById("baseOptions");
const stepInput = document.getElementById("stepInput");
const display = document.getElementById("display");
const reset = document.getElementById("reset");

let counter;
let counterData;

counterData = restoreCounterData();
counter = counterData
  ? new Counter(counterData.count, counterData.step, counterData.base)
  : new Counter();

console.log(
  `Counter initialized with count: ${counter.count}, step: ${counter.step}, base: ${counter.base}`
);
stepInput.value = counter.step;
display.innerHTML = counter.countFormatted();

function updateDisplay(counter) {
  display.innerHTML = counter.countFormatted();
  stepInput.value = counter.step;
  baseOptions.value = counter.base;
}

decrement.addEventListener("click", (e) => {
  e.preventDefault();
  counter.decrement();
  // display.innerHTML = counter.countFormatted();
  updateDisplay(counter);
  saveCounterData(counter);
});

increment.addEventListener("click", (e) => {
  e.preventDefault();
  counter.increment();
  // display.innerHTML = counter.countFormatted();
  updateDisplay(counter);
  saveCounterData(counter);
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  counter.reset();
  // display.innerHTML = counter.countFormatted();
  updateDisplay(counter);
  saveCounterData(counter);
});

stepInput.addEventListener("change", (e) => {
  e.preventDefault();
  counter.step = e.target.value;
  // display.innerHTML = counter.countFormatted();
  updateDisplay(counter);
  saveCounterData(counter);
});

baseOptions.addEventListener("change", (e) => {
  // e.preventDefault();
  counter.base = e.target.value;
  display.innerHTML = counter.countFormatted();
  saveCounterData(counter);
});
