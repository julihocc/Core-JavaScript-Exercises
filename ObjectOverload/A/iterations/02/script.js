// ***Task:
// Object.overload(instance, nameOfMethod, methodImplementation);
// If method does not exists create
// If already exists check the number of arguments and execute the right one.
// If there are no matches (based on the number of arguments) throw an error.

Object.OverloadedMethod = class  {
  constructor(nameOfMethod) {
    this.nameOfMethod = nameOfMethod;
    this.methods = {};
  }

  addMethod(methodImplementation) {
    // this.methods.set(methodImplementation.length, methodImplementation);
    this.methods[methodImplementation.length] = methodImplementation;
  }

  executeMethod(...args) {
    // console.log("Available methods:", this.methods);
    // let method = this.methods.get(args.length);
    let method = this.methods[args.length];
    if (method) {
      return method(...args);
    } else {
      throw new Error("Method does not exist with this number of arguments");
    }
  }
}

Object.overload = function (instance, nameOfMethod, methodImplementation) {
  const prefix = "__OVERLOADED_METHOD__";
  const overloadedMethond = prefix + nameOfMethod;
  if (!instance[overloadedMethond]){
    instance[overloadedMethond] = new Object.OverloadedMethod(nameOfMethod);
    if (instance[nameOfMethod]) {
      instance[overloadedMethond].addMethod(instance[nameOfMethod]);
    }
  }
    instance[overloadedMethond].addMethod(methodImplementation);
    instance[nameOfMethod] = instance[
      overloadedMethond
    ].executeMethod.bind(instance[overloadedMethond]);
};

// Example usage:

let obj = {};
obj.test = function () {
  return 0
};
Object.overload(obj, "test", function (a) {
  return a;
});
Object.overload(obj, "test", function (a) {
  return `a: ${a}`;
});
Object.overload(obj, "test", function (a,b) {
  return a+b;
});
console.log(obj.test());
console.log(obj.test(1));
console.log(obj.test(1, 2));
try {
  obj.test(1, 2, 3);
} catch (e) {
  console.error(e.message);
}

