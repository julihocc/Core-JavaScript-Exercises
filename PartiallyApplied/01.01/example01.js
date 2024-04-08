import curry from "./curry.js";

const isDivisibleBy = (divisor1, divisor2, number) => {
  return number % divisor1 === 0 && number % divisor2 === 0;
};

const curriedIsDivisibleBy = curry(isDivisibleBy);

console.log(curriedIsDivisibleBy(2)(3)(6));
console.log(curriedIsDivisibleBy(2)(3)(7));
console.log(curriedIsDivisibleBy(2)(5)(6));

console.log(curriedIsDivisibleBy(2)(5));

console.log(curriedIsDivisibleBy(undefined, 3)(2, 6));
