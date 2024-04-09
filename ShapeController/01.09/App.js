import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";
import ActionQueue from "./ActionQueue.js";
import Coordinates from "./Coordinates.js";

// TODO Refactor class App as IIFE
export default class App {
  constructor(
    canvas,
    context,
    shapeSelected,
    compress,
    // up,
    // down,
    // left,
    // right,
    directionsContainer,
    coordinateFormat,
    coordinateView,
    coordinateStyle,
    coordinateStyleContainer
  ) {
    if (App.instance) {
      return App.instance;
    }

    this.canvas = canvas;
    this.context = context;
    this.shapeSelected = shapeSelected;
    this.compress = compress;
    this.actionQueue = new ActionQueue();
    // this.up = up;
    // this.down = down;
    // this.left = left;
    // this.right = right;
    this.directionsContainer = directionsContainer;
    this.actionQueue = new ActionQueue();
    this.currentShape = new Square(0, 0, 20, this.context);
    this.directions = {
      up: { element: this.up, deltax: 0, deltay: -20 },
      down: { element: this.down, deltax: 0, deltay: 20 },
      left: { element: this.left, deltax: -20, deltay: 0 },
      right: { element: this.right, deltax: 20, deltay: 0 },
    };
    this.coordinateFormat = coordinateFormat;
    this.coordinateView = coordinateView;
    this.coordinateStyle = coordinateStyle;
    this.coordinateStyleContainer = coordinateStyleContainer;

    App.instance = this;
  }

  init() {
    console.log("App initialized");
    this.initShape();
    this.initCompress();
    this.initShapeDrawer();
    this.initDirections();
    this.initCoordinates();
    this.initCoordinateStyle();
    this.initCoordinateStyleContainer();
  }

  initShape() {
    this.shapeSelected.value = "square";
    console.log(this.currentShape.toString());
    this.currentShape.draw();
  }

  initCompress() {
    this.compress.addEventListener("click", () => {
      console.log("Compressing");
      this.actionQueue.compressed = this.compress.checked;
      console.log(this.actionQueue.compressed);
    });
  }

  initShapeDrawer() {
    this.shapeSelected.addEventListener("change", () => {
      const shape = this.shapeSelected.value;
      // Clear the canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (shape === "circle") {
        this.currentShape = new Circle(10, 10, 10, this.context);
      } else if (shape === "square") {
        this.currentShape = new Square(0, 0, 20, this.context);
      }
      console.log(this.currentShape.toString());
      this.currentShape.draw();
    });
  }
  // [x] Refactor to use event delegation
  // initDirections() {
  //   for (let direction in this.directions) {
  //     let element = this.directions[direction].element;
  //     let deltax = this.directions[direction].deltax;
  //     let deltay = this.directions[direction].deltay;
  //     element.addEventListener("click", () => {
  //       console.log("clicked", direction);
  //       let action = new Action(
  //         this.currentShape,
  //         this.context,
  //         direction,
  //         deltax,
  //         deltay
  //       );
  //       this.actionQueue.add(action);
  //       this.coordinates.x += deltax;
  //       this.coordinates.y += deltay;
  //       if (this.coordinateFormat.value === "polar") {
  //         this.coordinateView.innerText = this.coordinates.toPolar();
  //       } else {
  //         this.coordinateView.innerText = this.coordinates.toString();
  //       }
  //     });
  //   }
  // }

  initDirections() {
    // const parentElement = document.getElementById("directions-container");
    // replace with the id of the parent element

    this.directionsContainer.addEventListener("click", (event) => {
      const directionElement = event.target;
      console.log("directionElement", directionElement);

      const direction = directionElement.id; // replace with the appropriate attribute
      console.log("direction", direction);

      if (this.directions.hasOwnProperty(direction)) {
        console.log(
          "this.directions.hasOwnProperty(direction)",
          this.directions.hasOwnProperty(direction)
        );
        console.log("clicked", direction);
        let deltax = this.directions[direction].deltax;
        let deltay = this.directions[direction].deltay;
        let action = new Action(
          this.currentShape,
          this.context,
          direction,
          deltax,
          deltay
        );
        this.actionQueue.add(action);
        this.coordinates.x += deltax;
        this.coordinates.y += deltay;
        if (this.coordinateFormat.value === "polar") {
          this.coordinateView.innerText = this.coordinates.toPolar();
        } else {
          this.coordinateView.innerText = this.coordinates.toString();
        }
      }
    });
  }

  initCoordinates() {
    this.coordinates = new Coordinates(
      this.currentShape.x,
      this.currentShape.y
    );
    this.coordinateView.innerText = this.coordinates.toString();
    this.coordinateFormat.addEventListener("change", () => {
      if (this.coordinateFormat.value === "polar") {
        this.coordinateView.innerText = this.coordinates.toPolar();
      } else {
        this.coordinateView.innerText = this.coordinates.toString();
      }
    });
  }

  initCoordinateStyle() {
    this.coordinateStyle.addEventListener("change", () => {
      this.coordinates = new Coordinates(
        this.currentShape.x,
        this.currentShape.y
      );
      if (this.coordinateStyle.value === "binary") {
        this.coordinateView.innerText = this.coordinates.toString("binary");
      } else if (this.coordinateStyle.value === "octal") {
        this.coordinateView.innerText = this.coordinates.toString("octal");
      } else if (this.coordinateStyle.value === "hexadecimal") {
        this.coordinateView.innerText =
          this.coordinates.toString("hexadecimal");
      } else if (this.coordinateStyle.value === "roman") {
        this.coordinateView.innerText = this.coordinates.toString("roman");
      } else {
        this.coordinateView.innerText = this.coordinates.toString();
      }
    });
  }

  initCoordinateStyleContainer() {
    this.coordinateFormat.addEventListener("change", () => {
      if (this.coordinateFormat.value === "polar") {
        console.log("hiding");
        this.coordinateStyleContainer.style.display = "none";
      } else {
        console.log("showing");
        this.coordinateStyleContainer.style.display = "block";
      }
    });
  }
}
