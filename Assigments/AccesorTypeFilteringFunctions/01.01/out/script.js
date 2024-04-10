"use strict";
const obj = { a: 1, b: 1 };
const obj2 = { c: "hello", d: "world", e: true, run: () => { } };
const obj3 = {
    getC: () => "fizz",
    getD: () => "buzz",
    getE: () => false,
    setC: (value) => console.log(value),
    setD: (value) => console.log(value),
    setE: (value) => console.log(value),
};
const obj4 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
const obj5 = obj4;
console.log(obj5);
// Tasks: 
// Create a shallow copy of an object and set the getters an setters
// Get that done using reducer
// Take a setup validator function
