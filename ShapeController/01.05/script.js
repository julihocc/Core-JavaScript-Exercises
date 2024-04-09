import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";
import ActionQueue from "./ActionQueue.js";

const actionQueue = new ActionQueue();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const shapeSelected = document.getElementById("shape-selected");
const compress = document.getElementById("compress");

compress.addEventListener("click", function () {
  actionQueue.compressed = compress.checked;
})

let currentShape = new Square(0, 0, 49, context);
shapeSelected.value = "square";
console.log(currentShape.toString());
currentShape.draw();

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

const directions = {
  up: { element: up, deltax: 0, deltay: -20 },
  down: { element: down, deltax: 0, deltay: 20 },
  left: { element: left, deltax: -20, deltay: 0 },
  right: { element: right, deltax: 20, deltay: 0 },
};

shapeSelected.addEventListener("change", function () {
  const shape = shapeSelected.value;
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (shape === "circle") {
    currentShape = new Circle(0, 0, 49, context);
  } else if (shape === "square") {
    currentShape = new Square(0, 0, 49, context);
  }
  console.log(currentShape.toString());
  currentShape.draw();
});

for (let direction in directions) {
  let element = directions[direction].element;
  let deltax = directions[direction].deltax;
  let deltay = directions[direction].deltay;
  element.addEventListener("click", function () {
    console.log("clicked", direction);
    let action = new Action(currentShape, context, direction, deltax, deltay);
    actionQueue.add(action);
    // actionQueue.process();
    // actionQueue.debounceProcess();
  });
}
