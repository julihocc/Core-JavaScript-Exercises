import History from "./History.js";

const history = new History();
history.head.action = "hold";
history.tail.action = "hold";
history.insert(0);
history.insert(1);
history.insert("remove");
console.log(history.current.toString());
history.moveBackward();
console.log(history.current.toString());
history.insert(2);
console.log(history.current.toString());
history.moveForward().moveForward();
console.log(history.current.toString());
history.insert(3);
console.log(history.current.toString());

console.log(history.current.toString());
history.info();
