import Queue from "./Queue.js";
import History from "./History/History.js";

class ShapeController {
  constructor(coordinates, context) {
    this.coordinates = coordinates;
    this.context = context;
    // this.targetX = this.coordinates.x;
    // this.targetY = this.coordinates.y;
    this.targetX = null;
    this.targetY = null;
    this.animating = false;
    // [x] TODO 1. In shape controller, replace array with a queue
    // this.queue = [];
    this.queue = new Queue();
    // this.history = new History();
    this.undoQueue = new Queue();
    this.redoQueue = new Queue();
  }

  enqueue(action) {
    if (
      this.coordinates.x + action.deltax < 0 ||
      this.coordinates.x + action.deltax > canvas.width ||
      this.coordinates.y + action.deltay < 0 ||
      this.coordinates.y + action.deltay > canvas.height
    ) {
      console.error("Out of bounds");
    } else {
      // console.log("Applying action");
      // this.moveInThisDirection(event.deltax, event.deltay);
      // this.queue.push(event);
      this.queue.enqueue(action);
      this.undoQueue.enqueue(action);
      this.redoQueue = new Queue();
      console.log([...this.queue].map((e) => e.direction));
    }
  }

  dequeue() {
    console.log("ShapeController.dequeue()");
    if (this.queue.length > 0) {
      // const event = this.queue.shift();
      const action = this.queue.dequeue();
      this.moveInThisDirection(action.deltax, action.deltay);
    }
  }

  moveTo(x, y) {
    console.log("moveTo(x, y)", x, y);
    this.targetX = x;
    this.targetY = y;
    if (!this.animating) {
      this.animate();
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  undo() {
    const action = this.undoQueue.dequeue();
    if (action) {
      this.redoQueue.enqueue(action);
      this.moveTo(
        this.coordinates.x - action.deltax,
        this.coordinates.y - action.deltay
      );
    }
  }

  redo() {
    const action = this.redoQueue.dequeue();
    if (action) {
      this.undoQueue.enqueue(action);
      this.moveTo(
        this.coordinates.x + action.deltax,
        this.coordinates.y + action.deltay
      );
    }
  }

  // FIXME undo and redo are not working at the endpoints of the history

  animate() {
    // Smoothness factor determines the speed of the animation
    const smoothness = 0.25;
    const dx = this.targetX - this.coordinates.x;
    const dy = this.targetY - this.coordinates.y;

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      // console.log("dx", dx, "dy", dy);
      this.coordinates.x += dx * smoothness;
      this.coordinates.y += dy * smoothness;
      this.draw();
      requestAnimationFrame(this.animate.bind(this));
    } else {
      // Snap to final position and stop animating
      this.context.clearRect(0, 0, canvas.width, canvas.height);

      this.coordinates.x = this.targetX;
      this.coordinates.y = this.targetY;
      this.draw();
      this.animating = false;
      this.coordinates.updateCoordinateView();
    }
  }

  moveInThisDirection(dx, dy) {
    this.moveTo(this.coordinates.x + dx, this.coordinates.y + dy);
  }

  toString() {
    // return `x: ${this.x}, y: ${this.y}`;
    throw new Error("You have to implement the method toString!");
  }

  draw() {
    //developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    throw new Error("You have to implement the method draw!");
  }
}

class CircleController extends ShapeController {
  constructor(coordinates, context, radius) {
    super(coordinates, context);
    this.radius = radius;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this.coordinates.x,
      this.coordinates.y,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    // this.context.fill();
    this.context.stroke();
  }

  toString() {
    return `Circle x: ${this.coordinates.x}, y: ${this.coordinates.y}, radius: ${this.radius}`;
  }
}

class SquareController extends ShapeController {
  constructor(coordinates, context, length) {
    super(coordinates, context);
    this.length = length;
  }
  draw() {
    this.context.beginPath();
    this.context.rect(
      this.coordinates.x,
      this.coordinates.y,
      this.length,
      this.length
    );
    this.context.stroke();

    // this.context.fillStyle = "red";
    // this.context.fillRect(this.x, this.y, this.length, this.length);
  }
  toString() {
    return `Square x: ${this.coordinates.x}, y: ${this.coordinates.y}, length: ${this.length}`;
  }
  // TODO 2. Add a do/undo option to shape controller (performe the animations in reverse)
}

export { CircleController, SquareController };
