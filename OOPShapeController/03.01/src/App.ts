import { SquareController, CircleController } from "./ShapeController.js";
import Coordinates from "./Coordinates.js";
import { Directions } from "./directions.interface.js";

class App {
  step: number;
  debounceTime: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  shapeSelected: HTMLSelectElement;
  compress: HTMLInputElement;
  directionsContainer: HTMLDivElement;
  coordinateFormat: HTMLInputElement;
  coordinateView: HTMLDivElement;
  coordinateStyle: HTMLInputElement;
  coordinateStyleContainer: HTMLDivElement;
  undoContainer: HTMLDivElement;
  coordinates: Coordinates;
  currentShape: SquareController;
  directions: Directions;
  timer: void | null;
  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    shapeSelected: HTMLSelectElement,
    compress: HTMLInputElement,
    directionsContainer: HTMLDivElement,
    coordinateFormat: HTMLInputElement,
    coordinateView: HTMLDivElement,
    coordinateStyle: HTMLInputElement,
    coordinateStyleContainer: HTMLDivElement,
    undoContainer: HTMLDivElement
  ) {
    this.step = 10;
    this.debounceTime = 500;
    this.canvas = canvas;
    this.context = context;
    this.shapeSelected = shapeSelected;
    this.compress = compress;
    this.directionsContainer = directionsContainer;
    this.coordinateFormat = coordinateFormat;
    this.coordinateView = coordinateView;
    this.coordinateStyle = coordinateStyle;
    this.coordinateStyleContainer = coordinateStyleContainer;
    this.undoContainer = undoContainer;

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

    this.directions = {
      UP: { deltax: 0, deltay: -this.step },
      DOWN: { deltax: 0, deltay: this.step },
      LEFT: { deltax: -this.step, deltay: 0 },
      RIGHT: { deltax: this.step, deltay: 0 },
    };

    this.timer = null;
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
    this.initUndoContainer();
  }

  initShape() {
    this.shapeSelected.value = "square";
    console.log(this.currentShape.toString());
    this.currentShape.draw();
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

  createAction = (event: MouseEvent) => {
    console.log("Direction clicked on ", this);
    if (!(event.target instanceof HTMLElement))
      throw new Error("Invalid target");
    const directionElement = event.target;
    const direction = directionElement.id;
    if (this.directions.hasOwnProperty(direction)) {
      const directionData = this.directions[direction as keyof Directions];
      if (directionData) {
        let deltax = directionData.deltax;
        let deltay = directionData.deltay;

        const action = {
          direction,
          deltax,
          deltay,
        };
        console.log("Action", action.toString());
        return action;
      } else {
        throw new Error("Invalid direction data");
      }
    } else {
      throw new Error("Invalid direction");
    }
  };

  async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  processQueue = (event: MouseEvent) => {
    // this.enqueue(event);
    const action = this.createAction(event);
    this.currentShape.enqueue(action);
    this.currentShape.dequeue();
  };

  debouncedProcessQueue = async (event: MouseEvent) => {
    console.log("Compressing");
    if (this.timer) {
      clearTimeout(this.timer);
    }
    // this.enqueue(event);
    const action = this.createAction(event);
    this.currentShape.enqueue(action);
    this.timer = await this.delay(this.debounceTime);
    this.currentShape.dequeue();
  };

  initDirections() {
    if (this.compress.checked) {
      this.directionsContainer.addEventListener(
        "click",
        this.debouncedProcessQueue
      );
    } else {
      this.directionsContainer.addEventListener("click", this.processQueue);
    }
  }

  initCompress() {
    this.compress.addEventListener("click", () => {
      if (this.compress.checked) {
        this.directionsContainer.removeEventListener(
          "click",
          this.processQueue
        );
        this.directionsContainer.addEventListener(
          "click",
          this.debouncedProcessQueue
        );
      } else {
        this.directionsContainer.removeEventListener(
          "click",
          this.debouncedProcessQueue
        );
        this.directionsContainer.addEventListener("click", this.processQueue);
      }
    });
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

  initUndoContainer() {
    this.undoContainer.addEventListener("click", (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement))
        throw new Error("Invalid target");
      const action = event.target.id;
      console.log("Action; ", action);
      if (action === "undo") {
        this.currentShape.undo();
      }
      if (action === "redo") {
        this.currentShape.redo();
      }
    });
  }
}

export default App;
