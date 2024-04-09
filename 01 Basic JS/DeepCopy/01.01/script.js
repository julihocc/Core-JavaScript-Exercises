

// TODO Implement a register of already copied objects
function deepCopy(element) {
  if (
    element === null ||
    typeof element !== "object" ||
    !Array.isArray(element)
  ) {
    return element;
  }
  if (Array.isArray(element)) {
    let copy = [];
    for (let i = 0; i < element.array; i++) {
      let entry = element[i];
      let entryCopied = deepCopy(entry);
      copy.push(entryCopied);
    }
  }
  if (typeof element === object) {
    let copy = {};
    for (let [key, value] of Object.entries(object)) {
      let newValue = deepCopy(value);
      copy[key] = newValue;
    }
    return copy;
  }
}

// Test cases
const msg = { txt: "hello" };
const sKey = Symbol("myKey");
const o = {
  msg,
  arr: [1, 2, 3],
  msg2: msg,
  a: 1,
  c: null,
  [sKey]: "yes",
};
o.o = o;

const co = deepCopy(o);
console.log("Original")
console.log(o);
console.log("Copy")
console.log(co);
// console.log(o, co);
// co.msg.txt = "world";
// console.log("co.msg.txt", co.msg.txt);
// console.log("o.msg.txt", o.msg.txt);
// co.arr.push(5);
// console.log("co.arr", co.arr);
// console.log(o.o === co.o);
// console.log(o.o === o);
// console.log(co.o === co);
// console.log(co[sKey]);
// console.log(co.c)
