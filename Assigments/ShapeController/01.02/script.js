import { Square, Circle } from "./Shape.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const shapeSelected = document.getElementById("shape-selected");

let currentShape = null;

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

shapeSelected.addEventListener("change", function () {
  const shape = shapeSelected.value;
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (shape === "circle") {
    currentShape = new Circle(0, 0, 49, context);
    currentShape.draw();
  } else if (shape === "square") {
    currentShape = new Square(0, 0, 49, context);
    currentShape.draw();
  }
});

const directions = {
  up: { element: up, deltax: 0, deltay: -10 },
  down: { element: down, deltax: 0, deltay: 10 },
  left: { element: left, deltax: -10, deltay: 0 },
  right: { element: right, deltax: 10, deltay: 0 },
};

class Action {
  constructor(directions) {
    if (!directions) {
      throw new Error("You have to provide directions!");
    }
    this.directions = directions;
    this.direction = null;
    this.steps = 0;
  }

  toString() {
    return `direction: ${this.direction}, steps: ${this.steps}`;
  }

  apply() {
    if (currentShape) {
      if (this.direction) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        currentShape.move(
          this.directions[this.direction].deltax * this.steps,
          this.directions[this.direction].deltay * this.steps
        );
        currentShape.draw();
      } else {
        console.error("No direction to apply!");
      }
    } else {
      console.error("No shape to apply the action!");
    }
  }
}

console.string = function (obj) {
  console.log(String(obj));
};

const action = new Action(directions);

for (let direction in directions) {
  let element = directions[direction].element;
  let deltax = directions[direction].deltax;
  let deltay = directions[direction].deltay;
  element.addEventListener("click", function () {
    if (currentShape) {
      // context.clearRect(0, 0, canvas.width, canvas.height);
      // currentShape.move(
      //   deltax,
      //   deltay
      // );
      // currentShape.draw();
      //
      if (action.direction === direction) {
        action.steps++;
      } else {
        action.apply();
        action.direction = direction;
        action.steps = 1;
      }
      console.string(action);
    }
  });
}
