"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Converter_js_1 = __importDefault(require("./Converter.js"));
class Coordinates {
    constructor(x, y, coordinateFormat, coordinateView) {
        this.x = x;
        this.y = y;
        this.basis = "decimal";
        this.isPolar = false;
        this.converter = new Converter_js_1.default(this);
        this.coordinateFormat = coordinateFormat;
        this.coordinateView = coordinateView;
    }
    updateCoordinateView() {
        if (this.coordinateFormat.value === "polar") {
            this.coordinateView.innerText = this.converter.toPolar();
        }
        else {
            this.coordinateView.innerText = this.converter.toString();
        }
    }
}
exports.default = Coordinates;
