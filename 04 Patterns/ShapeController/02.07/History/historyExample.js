import History from "./History.js";

const history = new History();
history.head.action = "hold";
history.tail.action = "hold";
history.insert(0);
history.insert(1);
history.insert("remove");
history.moveBackward();
history.insert(2);
history.moveForward().moveForward();
history.insert(3);
history.info();
