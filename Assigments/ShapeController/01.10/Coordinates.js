import RomanNumerals from "./RomanNumerals.js";

export default class Coordinates {
  // Convert cartesian coordinates to polar coordinates

  static romanNumerals = new RomanNumerals();

  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.romanNumerals = new RomanNumerals();
  }

  toString(basis) {
    return `x: ${this.x}, y: ${this.y}`;
  }

  toPolar() {
    let r = Math.sqrt(this.x ** 2 + this.y ** 2);
    let theta = Math.atan2(this.y, this.x);
    return `r: ${r.toFixed(2)}, θ: ${((theta * 180) / Math.PI).toFixed(
      2
    )} degrees`;
  }
}

export class Binary extends Coordinates {
  toString() {
    return `x: ${this.x.toString(2)}, y: ${this.y.toString(2)}`;
  }
}

export class Octal extends Coordinates {
  toString() {
    return `x: ${this.x.toString(8)}, y: ${this.y.toString(8)}`;
  }
}

export class Hexadecimal extends Coordinates {
  toString() {
    return `x: ${this.x.toString(16)}, y: ${this.y.toString(16)}`;
  }
}

export class Decimal extends Coordinates {
  toString() {
    return `x: ${this.x}, y: ${this.y}`;
  }
}

export class Roman extends Coordinates {
  toString() {
    return `x: ${Coordinates.romanNumerals.toRoman(
      this.x
    )}, y: ${Coordinates.romanNumerals.toRoman(this.y)}`;
  }
}
