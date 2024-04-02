"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShapeController_js_1 = require("./ShapeController.js");
const Coordinates_js_1 = __importDefault(require("./Coordinates.js"));
class App {
    constructor(canvas, context, shapeSelected, compress, directionsContainer, coordinateFormat, coordinateView, coordinateStyle, coordinateStyleContainer, undoContainer) {
        this.createAction = (event) => {
            console.log("Direction clicked on ", this);
            if (!(event.target instanceof HTMLElement))
                throw new Error("Invalid target");
            const directionElement = event.target;
            const direction = directionElement.id;
            if (this.directions.hasOwnProperty(direction)) {
                const directionData = this.directions[direction];
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
                }
                else {
                    throw new Error("Invalid direction data");
                }
            }
            else {
                throw new Error("Invalid direction");
            }
        };
        this.processQueue = (event) => {
            // this.enqueue(event);
            const action = this.createAction(event);
            this.currentShape.enqueue(action);
            this.currentShape.dequeue();
        };
        this.debouncedProcessQueue = (event) => __awaiter(this, void 0, void 0, function* () {
            console.log("Compressing");
            if (this.timer) {
                clearTimeout(this.timer);
            }
            // this.enqueue(event);
            const action = this.createAction(event);
            this.currentShape.enqueue(action);
            this.timer = yield this.delay(this.debounceTime);
            this.currentShape.dequeue();
        });
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
        this.coordinates = new Coordinates_js_1.default(0, 0, this.coordinateFormat, this.coordinateView);
        this.currentShape = new ShapeController_js_1.SquareController(this.coordinates, this.context, this.canvas, this.step);
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
                this.currentShape = new ShapeController_js_1.CircleController(this.coordinates, this.context, this.canvas, this.step);
            }
            else if (shape === "square") {
                this.currentShape = new ShapeController_js_1.SquareController(this.coordinates, this.context, this.canvas, this.step);
            }
            console.log(this.currentShape.toString());
            this.currentShape.draw();
        });
    }
    delay(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(resolve, ms));
        });
    }
    initDirections() {
        if (this.compress.checked) {
            this.directionsContainer.addEventListener("click", this.debouncedProcessQueue);
        }
        else {
            this.directionsContainer.addEventListener("click", this.processQueue);
        }
    }
    initCompress() {
        this.compress.addEventListener("click", () => {
            if (this.compress.checked) {
                this.directionsContainer.removeEventListener("click", this.processQueue);
                this.directionsContainer.addEventListener("click", this.debouncedProcessQueue);
            }
            else {
                this.directionsContainer.removeEventListener("click", this.debouncedProcessQueue);
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
            }
            else {
                this.coordinateStyleContainer.style.display = "block";
            }
        });
    }
    initUndoContainer() {
        this.undoContainer.addEventListener("click", (event) => {
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
exports.default = App;
