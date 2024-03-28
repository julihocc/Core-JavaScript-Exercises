import Converter from "./Converter.js";

export default class Coordinates {
  // Convert cartesian coordinates to polar coordinates
  basis: string;
  x: number;
  y: number;
  isPolar: boolean;
  converter: Converter;
  coordinateFormat: HTMLInputElement;
  coordinateView: HTMLDivElement;

  constructor(
    x: number,
    y: number,
    coordinateFormat: HTMLInputElement,
    coordinateView: HTMLDivElement
  ) {
    this.x = x;
    this.y = y;
    this.basis = "decimal";
    this.isPolar = false;
    this.converter = new Converter(this);
    this.coordinateFormat = coordinateFormat;
    this.coordinateView = coordinateView;
  }

  updateCoordinateView() {
    if (this.coordinateFormat.value === "polar") {
      this.coordinateView.innerText = this.converter.toPolar();
    } else {
      this.coordinateView.innerText = this.converter.toString();
    }
  }
}
