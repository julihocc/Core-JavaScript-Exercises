function deepCopy(obj, register = new Map()) {
  if (typeof obj !== "object" || obj === null) return obj; // Return if obj is a primitive value or null

  // Handle circular references
  if (register.has(obj)) {
    return register.get(obj);
  }

  let result;
  if (Array.isArray(obj)) {
    result = [];
    register.set(obj, result);
    for (let i = 0; i < obj.length; i++) {
      result.push(deepCopy(obj[i], register));
    }
  } else {
    result = {};
    register.set(obj, result);

    // Copy all properties including Symbols
    Reflect.ownKeys(obj).forEach((key) => {
      result[key] = deepCopy(obj[key], register);
    });
  }

  return result;
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
co.msg.txt = "world";
console.log("co.msg.txt", co.msg.txt); // should be "world"
console.log("o.msg.txt", o.msg.txt); // should be "hello"
co.arr.push(5);
console.log("co.arr", co.arr); // should be [1, 2, 3, 5]
console.log(o.o === co.o); // should be true
console.log(o.o === o); // should be true
console.log(co.o === co); // should be true
console.log(co[sKey]); // should be "yes"
console.log(co.c); // should be null
