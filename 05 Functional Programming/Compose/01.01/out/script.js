"use strict";
function compose(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
const double = (x) => x * 2;
const square = (x) => x * x;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // Outputs: 36 ((3*2)^2)
