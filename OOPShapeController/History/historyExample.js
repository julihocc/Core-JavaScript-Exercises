import History from "./History.js";

const history = new History();
history.addAction({ direction: "down" });
history.addAction({ direction: "right" });
history.addAction({ direction: "up" });
history.addAction({ direction: "left" });
console.log(history.toString());
console.log(history.length);

let episode;

episode = history.undo();
episode = history.undo();
console.log(episode.toString());
console.log(history.current.toString());
console.log(history.length);

history.addAction({ direction: "down" });
console.log(history.current);
console.log(history.toString());
console.log(history.length);

history.undo();
history.undo();
console.log(history.current.toString());
history.redo();
console.log(history.current.toString());
