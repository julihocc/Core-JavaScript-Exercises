import RomanNumerals from "./RomanNumerals.js";
import Coordinates from "./Coordinates.js";

export default class Converter {
  coordinates: Coordinates;
  romanNumerals: RomanNumerals;
  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
    this.romanNumerals = new RomanNumerals();
  }

  toPolar() {
    let r = Math.sqrt(this.coordinates.x ** 2 + this.coordinates.y ** 2);
    let theta = Math.atan2(this.coordinates.y, this.coordinates.x);
    return `r : ${r}, θ : ${theta}`;
  }

  toString() {
    if (this.coordinates.basis === "decimal") {
      return `x: ${this.coordinates.x}, y: ${this.coordinates.y}`;
    }
    if (this.coordinates.basis === "roman") {
      return `x: ${this.romanNumerals.toRoman(
        this.coordinates.x
      )}, y: ${this.romanNumerals.toRoman(this.coordinates.y)}`;
    }
    if (this.coordinates.basis === "binary") {
      return `x: ${this.coordinates.x.toString(
        2
      )}, y: ${this.coordinates.y.toString(2)}`;
    }
    if (this.coordinates.basis === "octal") {
      return `x: ${this.coordinates.x.toString(
        8
      )}, y: ${this.coordinates.y.toString(8)}`;
    }
    if (this.coordinates.basis === "hexadecimal") {
      return `x: ${this.coordinates.x.toString(
        16
      )}, y: ${this.coordinates.y.toString(16)}`;
    }

    throw new Error("Invalid base");
  }
}
