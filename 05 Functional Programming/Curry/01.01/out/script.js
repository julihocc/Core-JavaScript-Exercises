"use strict";
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return function (...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
function concat(a, b, c) {
  return a + b + c;
}
const curriedConcat = curry(concat);
console.log(curriedConcat("Hello")(" ")("World!"));
