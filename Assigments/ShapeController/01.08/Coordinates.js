import RomanNumerals from "./RomanNumerals.js";

export default class Coordinates {
  // Convert cartesian coordinates to polar coordinates

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.romanNumerals = new RomanNumerals();
  }

  // TODO create a converter for each basis
  toString(basis) {
    if (basis === "binary") {
      return `x: ${this.x.toString(2)}, y: ${this.y.toString(2)}`;
    }
    if (basis === "octal") {
      return `x: ${this.x.toString(8)}, y: ${this.y.toString(8)}`;
    }
    if (basis === "hexadecimal") {
      return `x: ${this.x.toString(16)}, y: ${this.y.toString(16)}`;
    }
    if (basis === "roman") {
      return `x: ${this.romanNumerals.toRoman(
        this.x
      )}, y: ${this.romanNumerals.toRoman(this.y)}`;
    }

    return `x: ${this.x}, y: ${this.y}`;
  }

  toPolar() {
    let r = Math.sqrt(this.x ** 2 + this.y ** 2);
    let theta = Math.atan2(this.y, this.x);
    return `r: ${r.toFixed(2)}, θ: ${theta.toFixed(2)}`;
  }
}
