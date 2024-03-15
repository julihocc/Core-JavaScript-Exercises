import curry from "./curry.js";

function addFractions(a, b, c, d) {
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
