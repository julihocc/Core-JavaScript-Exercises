import { SquareController, CircleController } from "./ShapeController.js";
// import Event from "./Event.js";
// import Controller from "./Controller.js";
import Coordinates from "./Coordinates.js";

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

    this.coordinates = new Coordinates(
      0,
      0,
      this.coordinateFormat,
      this.coordinateView
    );

    this.currentShape = new SquareController(
      this.coordinates,
      this.context,
      this.step
    );
    // this.controller = new Controller();

    this.directions = {
      up: { deltax: 0, deltay: -this.step },
      down: { deltax: 0, deltay: this.step },
      left: { deltax: -this.step, deltay: 0 },
      right: { deltax: this.step, deltay: 0 },
    };

    this.timerId = null;
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
      if (this.compress.checked) {
        this.directionsContainer.removeEventListener("click", this.callback);
        this.directionsContainer.addEventListener(
          "click",
          this.delayedCallback
        );
      } else {
        this.directionsContainer.removeEventListener(
          "click",
          this.delayedCallback
        );
        this.directionsContainer.addEventListener("click", this.callback);
      }
    });
  }

  initShapeDrawer() {
    this.shapeSelected.addEventListener("change", () => {
      const shape = this.shapeSelected.value;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (shape === "circle") {
        this.currentShape = new CircleController(
          this.coordinates,
          this.context,
          this.step
        );
      } else if (shape === "square") {
        this.currentShape = new SquareController(
          this.coordinates,
          this.context,
          this.step
        );
      }
      console.log(this.currentShape.toString());
      this.currentShape.draw();
    });
  }

  callback = (event) => {
    console.log("Direction clicked on ", this);
    const directionElement = event.target;
    const direction = directionElement.id;
    if (this.directions.hasOwnProperty(direction)) {
      let deltax = this.directions[direction].deltax;
      let deltay = this.directions[direction].deltay;
      // let event = new Event(
      //   this.currentShape,
      //   this.context,
      //   direction,
      //   deltax,
      //   deltay
      // );
      const event = {
        direction,
        deltax,
        deltay,
      };
      console.log("Event", event.toString());
      this.currentShape.add(event);
    }
  };

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  delayedCallback = async (e) => {
    console.log("Compressing");
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.timerId = await this.delay(3000);
    this.callback(e);
  };

  initDirections() {
    if (this.compress.checked) {
      this.directionsContainer.addEventListener("click", this.delayedCallback);
    } else {
      this.directionsContainer.addEventListener("click", this.callback);
    }
  }

  initCoordinates() {
    this.coordinates.updateCoordinateView();
    this.coordinateFormat.addEventListener("change", () => {
      this.coordinates.updateCoordinateView();
    });
  }

  initCoordinateStyle() {
    this.coordinateStyle.addEventListener("change", () => {
      this.coordinates.basis = this.coordinateStyle.value;
      this.coordinates.updateCoordinateView();
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
