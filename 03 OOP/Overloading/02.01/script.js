// ***Task:
// Object.overload(instance, nameOfMethod, methodImplementation);
// If method does not exists create
// If already exists check the number of arguments and execute the right one.
// If there are no matches (based on the number of arguments) throw an error.

// Allow overload method to get access to the instance context
// Use super inside that methods

Object.OverloadedMethod = class {
  #nameOfMethod;
  #methods;

  constructor(nameOfMethod, context) {
    this.#nameOfMethod = nameOfMethod;
    this.#methods = {};
    this.context = context;
  }

  addMethod(methodImplementation) {
    // this.methods.set(methodImplementation.length, methodImplementation);
    this.#methods[methodImplementation.length] = methodImplementation.bind(
      this.context
    );
  }

  executeMethod(...args) {
    // console.log("Available methods:", this.methods);
    // let method = this.methods.get(args.length);
    let method = this.#methods[args.length];
    if (method) {
      return method(...args);
    } else {
      throw new Error("Method does not exist with this number of arguments");
    }
  }
};

Object.overload = function (instance, nameOfMethod, methodImplementation) {
  const prefix = "__OVERLOADED_METHOD__";
  const overloadedMethodName = prefix + nameOfMethod;
  if (!instance[overloadedMethodName]) {
    instance[overloadedMethodName] = new Object.OverloadedMethod(
      nameOfMethod,
      instance
    );
    if (instance[nameOfMethod]) {
      instance[overloadedMethodName].addMethod(instance[nameOfMethod]);
    }
  }
  instance[overloadedMethodName].addMethod(methodImplementation);
  instance[nameOfMethod] = instance[overloadedMethodName].executeMethod.bind(
    instance[overloadedMethodName]
  );
};

// Example usage:

let obj = { x: 5, y: 10 };
obj.test = function () {
  return this.x + this.y;
};
Object.overload(obj, "test", function (a) {
  return a;
});
Object.overload(obj, "test", function (a) {
  return `a: ${a}`;
});
Object.overload(obj, "test", function (a, b) {
  return a + b + this.x;
});
console.log(obj.test());
console.log(obj.test(1));
console.log(obj.test(1, 2));
try {
  obj.test(1, 2, 3);
} catch (e) {
  console.error(e.message);
}
