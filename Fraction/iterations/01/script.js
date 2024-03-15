import Fraction from "./Fraction.js";

console.log(Fraction.gcd(2*3*5, 2*3*7)); 

try {
  new Fraction(1, 0);
} catch (e) {
  console.error(e.message);
}

const f = new Fraction(6, 15);
console.log(f)
console.log(String(f));

f.simplify();
console.log(f);

const g = new Fraction(2, 3);
console.log(g);

console.log(f.multiply(g));

const zero = new Fraction(0, 1);
console.log(zero.isZero());
try {
  zero.reciprocal();
} catch(error){
  console.error(error.message);
}

try {
  f.divideBy(zero);
} catch(error){
  console.error(error.message);
}

console.log(f.divideBy(f));
console.log(f.divideBy(g));

console.log(f.add(g));

console.log(f.subtract(f))

const oneHalf = new Fraction(1, 2);
const otherHalf = new Fraction(3, 6);
console.log(oneHalf.equals(otherHalf));

const oneThird = new Fraction(1, 3);
console.log(oneThird.equals(oneHalf));
console.log(oneThird.greaterThan(oneHalf));
console.log(oneThird.lessThan(oneHalf));
console.log(oneThird.greaterOrEquals(oneHalf));
console.log(oneThird.lessOrEquals(oneHalf));
console.log(otherHalf.greaterOrEquals(oneHalf));
console.log(otherHalf.lessOrEquals(oneHalf));

