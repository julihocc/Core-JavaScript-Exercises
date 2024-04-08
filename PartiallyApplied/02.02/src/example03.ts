import curry from "./curry.js";

function addFractions(a: number, b: number, c: number, d: number) {
  if (b === 0 || d === 0) throw new Error("Denominator cannot be zero");
  return a / b + c / d;
}

const curriedAddFractions = curry(addFractions);

console.log(curriedAddFractions(1, 2, 1, 4));
console.log(curriedAddFractions(1, 2)(1, 4));

const addIntegerFraction = curriedAddFractions(
  undefined,
  1,
  undefined,
  undefined
);
console.log(addIntegerFraction(2, 3, 4));

const addIntegers = curriedAddFractions(undefined, 1, undefined, 1);
console.log(addIntegers(2, 3));
