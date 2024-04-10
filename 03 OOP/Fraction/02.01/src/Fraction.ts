export default class Fraction extends Number {
  #n: number;
  #d: number;

  static gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return Fraction.gcd(b, a % b);
  }

  static from(decimal: number) {
    // FIX-ME Do not use convertion to string
    let power = 0;
    while (decimal % 1 !== 0) {
      decimal *= 10;
      power++;
    }
    const result = new Fraction(decimal, Math.pow(10, power));
    result.simplify();
    return result;
  }

  static isInteger(number: number) {
    return number % 1 === 0;
  }

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    if (!Fraction.isInteger(numerator) || !Fraction.isInteger(denominator)) {
      throw new Error("Numerator and denominator must be integers");
    }
    super(numerator / denominator);
    this.#n = numerator;
    this.#d = denominator;
  }

  valueOf():number {
    return this.#n / this.#d;
  }

  get numerator() {
    return this.#n;
  }

  get denominator() {
    return this.#d;
  }

  toString() {
    return `${this.#n}/${this.#d}`;
  }

  simplify() {
    const gcd = Fraction.gcd(this.#n, this.#d);
    if (this.#n * this.#d < 0) {
      this.#n = -Math.abs(this.#n);
      this.#d = Math.abs(this.#d);
    }
    this.#n /= gcd;
    this.#d /= gcd;
  }

  multiply(fraction: Fraction) {
    const N = this.#n * fraction.numerator;
    const D = this.#d * fraction.denominator;
    const result = new Fraction(N, D);
    result.simplify();
    return result;
  }

  isZero() {
    return this.#n === 0 && this.#d !== 0;
  }

  reciprocal() {
    if (this.isZero()) {
      throw new Error("Cannot compute reciprocal of zero");
    }
    const result = new Fraction(this.#d, this.#n);
    result.simplify();
    return result;
  }

  divideBy(fraction: Fraction) {
    if (fraction.isZero()) {
      throw new Error("Cannot divide by zero");
    }
    const result = this.multiply(fraction.reciprocal());
    result.simplify();
    return result;
  }

  add(fraction: Fraction) {
    const N = this.#n * fraction.denominator + fraction.numerator * this.#d;
    const D = this.#d * fraction.denominator;
    const result = new Fraction(N, D);
    result.simplify();
    return result;
  }

  negative() {
    const neg = new Fraction(-this.#n, this.#d);
    neg.simplify();
    return neg;
  }

  subtract(fraction: Fraction) {
    return this.add(fraction.negative());
  }

  #crossMultiplication(fraction: Fraction) {
    return this.#n * fraction.denominator - fraction.numerator * this.#d;
  }

  equals(fraction: Fraction) {
    return this.#crossMultiplication(fraction) === 0;
  }

  greaterThan(fraction: Fraction) {
    return this.#crossMultiplication(fraction) > 0;
  }

  lessThan(fraction: Fraction) {
    return this.#crossMultiplication(fraction) < 0;
  }

  greaterOrEquals(fraction: Fraction) {
    return this.#crossMultiplication(fraction) >= 0;
  }

  lessOrEquals(fraction: Fraction) {
    return this.#crossMultiplication(fraction) <= 0;
  }
}
