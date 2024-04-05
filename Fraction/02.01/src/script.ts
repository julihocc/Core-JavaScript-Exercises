import Fraction from "./Fraction.js";

console.string = function(fraction){
  console.log(fraction.toString());
}

console.string(Fraction.gcd(2*3*5, 2*3*7)); 

try {
  new Fraction(1, 0);
} catch (e) {
  console.error(e.message);
}

try {
  new Fraction(1.5, 2);
} catch (e) {
  console.error(e.message);
}

const f = new Fraction(6, 15);
console.string(f)
console.log(f)

f.simplify();
console.string(f);

const g = new Fraction(2, 3);
console.string(g);

console.string(f.multiply(g));

const zero = new Fraction(0, 1);
console.string(zero.isZero());
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

console.string(f.divideBy(f));
console.string(f.divideBy(g));

console.string(f.add(g));

console.string(f.subtract(f))

const oneHalf = new Fraction(1, 2);
const otherHalf = new Fraction(3, 6);
console.string(oneHalf.equals(otherHalf));

const oneThird = new Fraction(1, 3);
console.string(oneThird.equals(oneHalf));
console.string(oneThird.greaterThan(oneHalf));
console.string(oneThird.lessThan(oneHalf));
console.string(oneThird.greaterOrEquals(oneHalf));
console.string(oneThird.lessOrEquals(oneHalf));
console.string(otherHalf.greaterOrEquals(oneHalf));
console.string(otherHalf.lessOrEquals(oneHalf));

console.string(oneHalf+oneThird);
console.log(oneHalf + oneThird);

console.string(Fraction.from(1.5));
console.string(Fraction.from(1e-2));