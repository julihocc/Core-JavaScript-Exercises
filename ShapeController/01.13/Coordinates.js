export default class Coordinates {
  // Convert cartesian coordinates to polar coordinates

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.basis = "decimal";
    this.isPolar = false;
  }
}
