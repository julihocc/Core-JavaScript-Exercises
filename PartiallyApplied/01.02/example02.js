import curry from "./curry.js";

function fn(m, x, b) {
  return m * x + b;
}

const curriedFn = curry(fn);

console.log(curriedFn(2)(3)(6)); // 12

console.log(curriedFn(undefined, 3)(2, 6)); // 12

try {
  console.log(curriedFn(2, undefined, 6)(3)); //
} catch (e) {
  console.error(e.message);
}

try {
  console.log(curriedFn(2, 3)(6)); //
} catch (e) {
  console.error(e.message);
}

try {
  console.log(curriedFn(2)(3, 6)); //
} catch (e) {
  console.error(e.message);
}

try{
  console.log(curriedFn(undefined,3,undefined)(2, 6))
} catch (e) {
  console.error(e.message);
}