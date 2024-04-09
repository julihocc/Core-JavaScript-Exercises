import type Counter from "./Counter.js";

export function saveCounterData(counter: Counter) {
  let counterData = {
    count: counter.count,
    step: counter.step,
    base: counter.base,
  };
  localStorage.setItem("counter", JSON.stringify(counterData));
  console.log(`Local Storage: ${localStorage.getItem("counter")}`);
}

export function restoreCounterData() {
  const counterData = localStorage.getItem("counter");
  if (counterData) {
    return JSON.parse(counterData);
  }
  return null;
}
