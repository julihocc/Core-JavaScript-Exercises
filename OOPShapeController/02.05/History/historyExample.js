import History from "./History.js";

const history = new History();
history.push({ direction: "down" });
console.log(history.current.position);
history.push({ direction: "right" });
console.log(history.current.position);
history.push({ direction: "up" });
console.log(history.current.position);
history.push({ direction: "left" });
console.log(history.current.position);
console.log(history.toString());
console.log(history.length);

let episode;

console.log(history.current.toString());
history
  .moveBackward()
  .moveBackward()
  .moveBackward()
  .moveBackward()
  .moveBackward();
console.log(history.current.toString());
history.moveForward();
console.log(history.current.toString());
history.moveForward().moveForward().moveForward().moveForward().moveForward();
console.log(history.current.toString());
history.moveBackward();
console.log(history.current.toString());

console.log([...history].map((e) => e.toString()));

// history.push({ direction: "down" });
// console.log(history.current.toString());

// console.log(history.toString());
// console.log(history.length);
