export default class Fraction extends Number {
  #n;
  #d;

  static gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return Fraction.gcd(b, a % b);
  }

  static from(decimal) {
    // FIX-ME Do not use convertion to string
    let power = 0
    while (decimal % 1 !== 0) {
      decimal *= 10;
      power++;
    }
    const result = new Fraction(decimal, Math.pow(10, power));
    result.simplify();
    return result;
  }

  static isInteger(number){
    return number % 1 === 0;
  }

  constructor(numerator, denominator) {
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

  valueOf() {
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

  multiply(fraction) {
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

  divideBy(fraction) {
    if (fraction.isZero()) {
      throw new Error("Cannot divide by zero");
    }
    const result = this.multiply(fraction.reciprocal());
    result.simplify();
    return result;
  }

  add(fraction) {
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

  subtract(fraction) {
    return this.add(fraction.negative());
  }

  #crossMultiplication(fraction) {
    return this.#n * fraction.denominator - fraction.numerator * this.#d;
  }

  equals(fraction) {
    return this.#crossMultiplication(fraction) === 0;
  }

  greaterThan(fraction) {
    return this.#crossMultiplication(fraction) > 0;
  }

  lessThan(fraction) {
    return this.#crossMultiplication(fraction) < 0;
  }

  greaterOrEquals(fraction) {
    return this.#crossMultiplication(fraction) >= 0;
  }

  lessOrEquals(fraction) {
    return this.#crossMultiplication(fraction) <= 0;
  }
}
