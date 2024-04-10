import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";
import ActionQueue from "./ActionQueue.js";
import Coordinates from "./Coordinates.js";
import Converter from "./Converter.js";

class App {
  constructor(
    canvas,
    context,
    shapeSelected,
    compress,
    directionsContainer,
    coordinateFormat,
    coordinateView,
    coordinateStyle,
    coordinateStyleContainer
  ) {
    this.step = 20;
    this.canvas = canvas;
    this.context = context;
    this.shapeSelected = shapeSelected;
    this.compress = compress;
    this.directionsContainer = directionsContainer;
    this.coordinateFormat = coordinateFormat;
    this.coordinateView = coordinateView;
    this.coordinateStyle = coordinateStyle;
    this.coordinateStyleContainer = coordinateStyleContainer;

    this.coordinates = new Coordinates(0, 0);
    this.converter = new Converter(this.coordinates);
    this.currentShape = new Square(0, 0, this.step, this.context);
    this.actionQueue = new ActionQueue();

    this.directions = {
      up: { deltax: 0, deltay: -this.step },
      down: { deltax: 0, deltay: this.step },
      left: { deltax: -this.step, deltay: 0 },
      right: { deltax: this.step, deltay: 0 },
    };
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
    this.actionQueue.compressed = this.compress.checked;
    this.compress.addEventListener("click", () => {
      console.log("Compressing");
      this.actionQueue.compressed = this.compress.checked;
      console.log(this.actionQueue.compressed);
    });
  }

  initShapeDrawer() {
    this.shapeSelected.addEventListener("change", () => {
      const shape = this.shapeSelected.value;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (shape === "circle") {
        this.currentShape = new Circle(
          this.step / 2,
          this.step / 2,
          this.step / 2,
          this.context
        );
      } else if (shape === "square") {
        this.currentShape = new Square(0, 0, this.step, this.context);
      }
      console.log(this.currentShape.toString());
      this.currentShape.draw();
    });
  }

  initDirections() {
    this.directionsContainer.addEventListener("click", (event) => {
      const directionElement = event.target;
      const direction = directionElement.id;
      if (this.directions.hasOwnProperty(direction)) {
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
        this.updateCoordinateView();
      }
    });
  }

  updateCoordinateView() {
    if (this.coordinateFormat.value === "polar") {
      this.coordinateView.innerText = this.converter.toPolar();
    } else {
      this.coordinateView.innerText = this.converter.toString();
    }
  }

  initCoordinates() {
    this.updateCoordinateView();
    this.coordinateFormat.addEventListener("change", () => {
      this.updateCoordinateView();
    });
  }

  initCoordinateStyle() {
    this.coordinateStyle.addEventListener("change", () => {
      this.coordinates.basis = this.coordinateStyle.value;
      this.updateCoordinateView();
    });
  }

  initCoordinateStyleContainer() {
    this.coordinateFormat.addEventListener("change", () => {
      if (this.coordinateFormat.value === "polar") {
        this.coordinateStyleContainer.style.display = "none";
      } else {
        this.coordinateStyleContainer.style.display = "block";
      }
    });
  }
}

export default App;
