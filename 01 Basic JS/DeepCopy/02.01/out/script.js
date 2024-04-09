"use strict";
function deepCopy(obj, register = new Map()) {
    // console.log("obj: ", obj);
    if (typeof obj !== "object" || obj === null)
        return obj; // Return if obj is a primitive value or null
    // Handle circular references
    if (register.has(obj)) {
        return register.get(obj);
    }
    if (Array.isArray(obj)) {
        console.log("Array: ", obj);
        let resultArray = [];
        register.set(obj, resultArray);
        // obj.forEach((item, index) => {
        //   resultArray[index] = deepCopy(item, register);
        // });
        for (let i = 0; i < obj.length; i++) {
            // resultArray[i] = deepCopy(obj[i], register);
            resultArray.push(deepCopy(obj[i], register));
        }
        // console.log("resultArray: ", resultArray);
        return resultArray;
    }
    else {
        let resultObj = {};
        register.set(obj, resultObj);
        Reflect.ownKeys(obj).forEach((key) => {
            // resultObj[key] = deepCopy(obj[key], register);
            resultObj[key] = deepCopy(
            // obj as { [key: string]: any },
            obj[key], register);
        });
        return resultObj;
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
console.log("co", co);
for (const key in co) {
    console.log("key: ", key, "value: ", co[key]);
}
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
