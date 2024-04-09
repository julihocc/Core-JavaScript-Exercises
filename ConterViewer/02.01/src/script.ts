import Counter, {Base} from "./Counter.js";
import { saveCounterData, restoreCounterData } from "./storage.js";

const decrement = document.getElementById("decrement") as HTMLButtonElement;
const increment = document.getElementById("increment") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const random = document.getElementById("random") as HTMLButtonElement;
const baseOptions = document.getElementById("baseOptions") as HTMLSelectElement;
const stepInput = document.getElementById("stepInput") as HTMLInputElement;
const display = document.getElementById("display") as HTMLDivElement;

let counter;
let counterData;

counterData = restoreCounterData();
counter = counterData
  ? new Counter(counterData.count, counterData.step, counterData.base)
  : new Counter();

console.log(
  `Counter initialized with count: ${counter.count}, step: ${counter.step}, base: ${counter.base}`
);
stepInput.value = String(counter.step);
display.innerHTML = counter.countFormatted();

function updateDisplay(counter: Counter) {
  display.innerHTML = counter.countFormatted();
  if (typeof counter.step === "number") {
    stepInput.value = String(counter.step);
  }
  if (typeof counter.step === "string") {
    stepInput.value = counter.step;
  }
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

random.addEventListener("click", (e) => {
  e.preventDefault();
  counter.random();
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
  const target = e.target as HTMLInputElement;
  if (target) {
    counter.step = target.value;
    // display.innerHTML = counter.countFormatted();
    updateDisplay(counter);
    saveCounterData(counter);
  }
});

baseOptions.addEventListener("change", (e) => {
  // e.preventDefault();
  const target = e.target as HTMLSelectElement;
  if (target) {
    counter.base = target.value as Base;
    display.innerHTML = counter.countFormatted();
    saveCounterData(counter);
  }
});
