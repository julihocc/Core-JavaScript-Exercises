import Converter from "./Converter.js";

export default class Coordinates {
  // Convert cartesian coordinates to polar coordinates

  constructor(x, y, coordinateFormat, coordinateView) {
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
