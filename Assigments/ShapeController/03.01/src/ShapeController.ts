// TODO Implement a log decorator

import Queue from "./Queue.js";
import Stack from "./Stack.js";
import Coordinates from "./Coordinates.js";

interface Action {
  direction?: string;
  deltax: number;
  deltay: number;
}

abstract class ShapeController {
  coordinates: Coordinates;
  context: CanvasRenderingContext2D;
  targetX: number | null;
  targetY: number | null;
  animating: boolean;
  queue: Queue<Action>;
  undoStack: Stack<Action>;
  redoStack: Stack<Action>;
  canvas: HTMLCanvasElement;
  constructor(
    coordinates: Coordinates,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    this.coordinates = coordinates;
    this.context = context;
    this.canvas = canvas;
    this.targetX = null;
    this.targetY = null;
    this.animating = false;
    // [x] TODO 1. In shape controller, replace array with a queue
    // this.queue = [];
    this.queue = new Queue();
    // this.history = new History();
    this.undoStack = new Stack();
    this.redoStack = new Stack();
  }

  enqueue(action: Action) {
    if (
      this.coordinates.x + action.deltax < 0 ||
      this.coordinates.x + action.deltax > this.canvas.width ||
      this.coordinates.y + action.deltay < 0 ||
      this.coordinates.y + action.deltay > this.canvas.height
    ) {
      console.error("Out of bounds");
    } else {
      // console.log("Applying action");
      // this.moveInThisDirection(event.deltax, event.deltay);
      // this.queue.push(event);
      this.queue.enqueue(action);
      this.undoStack.push(action);
      console.log([...this.queue].map((e) => e.direction));
    }
  }

  dequeue() {
    console.log("ShapeController.dequeue()");
    if (this.queue.length > 0) {
      // const event = this.queue.shift();
      const action = this.queue.dequeue();
      if (action) this.moveInThisDirection(action.deltax, action.deltay);
    }
  }

  moveTo(x: number | null, y: number | null) {
    console.log("moveTo(x, y)", x, y);
    this.targetX = x;
    this.targetY = y;
    if (!this.animating) {
      this.animate();
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  undo() {
    // const action = this.undoQueue.pop();
    const action = this.undoStack.pop();
    if (action) {
      // this.redoQueue.enqueue(action);
      this.redoStack.push(action);
      this.moveTo(
        this.coordinates.x - action.deltax,
        this.coordinates.y - action.deltay
      );
    }
  }

  redo() {
    // const action = this.redoQueue.dequeue();
    const action = this.redoStack.pop();
    if (action) {
      // this.undoQueue.enqueue(action);
      this.undoStack.push(action);
      this.moveTo(
        this.coordinates.x + action.deltax,
        this.coordinates.y + action.deltay
      );
    }
  }

  //  FIXME undo and redo are not working at the endpoints of the history

  animate() {
    // Smoothness factor determines the speed of the animation
    const smoothness = 0.25;
    console.log("Animating");
    console.log("this.targetX", this.targetX, "this.targetY", this.targetY);
    if (this.targetX === null || this.targetY === null)
      throw new Error("Invalid target coordinates");
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
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.coordinates.x = this.targetX;
      this.coordinates.y = this.targetY;
      this.draw();
      this.animating = false;
      this.coordinates.updateCoordinateView();
    }
  }

  moveInThisDirection(dx: number, dy: number) {
    this.moveTo(this.coordinates.x + dx, this.coordinates.y + dy);
  }


  abstract toString(): string;



  abstract draw(): void;
}

class CircleController extends ShapeController {
  radius: number;
  constructor(
    coordinates: Coordinates,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    radius: number
  ) {
    super(coordinates, context, canvas);
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
  length: number;
  constructor(
    coordinates: Coordinates,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    length: number
  ) {
    super(coordinates, context, canvas);
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

export { CircleController, SquareController, ShapeController };
