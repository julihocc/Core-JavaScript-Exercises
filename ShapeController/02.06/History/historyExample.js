import History from "./History.js";

const history = new History();
history.insert({ direction: "down", deltax: 0, deltay: 1 });
history.insert({ direction: "right", deltax: 1, deltay: 0 });
history.insert({ direction: "up", deltax: 0, deltay: -1 });
history.moveBackward();
history.insert({ direction: "left", deltax: -1, deltay: 0 });
console.log("Current: ", history.current.toString());
console.log("History lenght: ", history.length);
console.log("Head: ", history.head.toString());
// console.log("Next to head: ", history.head.next.toString());
console.log("Tail: ", history.tail.toString());
// console.log("Prev to tail: ", history.tail.prev.toString());
console.log("To array:", [...history]);
console.log("History:", history.toString());
