import History from "./History.js";

const history = new History();
history.setAsTail({ direction: "down" });
console.log(history.current.toString());
history.setAsTail({ direction: "right" });
console.log(history.current.toString());
history.setAsTail({ direction: "up" });
console.log(history.current.toString());
history.setAsTail({ direction: "left" });
console.log(history.current.toString());
console.log(history.toString());
console.log("Length: ", history.length);

// console.log(history.current.toString());
// history
//   .moveBackward()
//   .moveBackward()
//   .moveBackward()
//   .moveBackward()
//   .moveBackward();
// console.log(history.current.toString());
// history.moveForward();
// console.log(history.current.toString());
// history.moveForward().moveForward().moveForward().moveForward().moveForward();
// console.log(history.current.toString());
// history.moveBackward();
// console.log(history.current.toString());

// history.push({ direction: "down" });
// console.log(history.current.toString());

// console.log(history.toString());
// console.log(history.length);

history.moveBackward().moveBackward();
console.log(history.current.toString());
console.log(history.toString());

history.setAsTail({ direction: "down" });
console.log(history.current.toString());
console.log(history.toString());

history.moveBackward().moveBackward().moveBackward();
console.log(history.current.toString());
console.log(history.toString());

history.setAsTail({ direction: "right" });
console.log(history.current.toString());
console.log(history.toString());
