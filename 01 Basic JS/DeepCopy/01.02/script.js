// TODO Implement a register of already copied objects
function deepCopy(element, register = new Map()) {
  // Correctly handle non-object types and null
  if (element === null || typeof element !== 'object') {
    return element;
  }

  // Use the register to handle circular references
  if (register.has(element)) {
    return register.get(element);
  }

  let copy;
  if (Array.isArray(element)) {
    copy = [];
    register.set(element, copy);
    for (let i = 0; i < element.length; i++) {
      copy[i] = deepCopy(element[i], register);
    }
  } else {
    copy = {};
    register.set(element, copy);
    // Copy all properties including Symbols
    Reflect.ownKeys(element).forEach(key => {
      copy[key] = deepCopy(element[key], register);
    });
  }

  return copy;
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

// register = new Map();
const co = deepCopy(o);
co.msg.txt = "world";
console.log("co.msg.txt", co.msg.txt); // should be "world"
console.log("o.msg.txt", o.msg.txt); // should be "hello" but it is "world"
co.arr.push(5); 
console.log("co.arr", co.arr); // should be [1, 2, 3, 5]
console.log(o.o === co.o); // should be true
console.log(o.o === o); // should be true
console.log(co.o === co); // should be true
console.log(co[sKey]); // should be "yes"
console.log(co.c) // should be null

