function overload(value, context) {
  const { name, addInitializer } = context;
  function initializer() {
    // console.log(`Initializing ${name}`);
    // console.log(`this ${JSON.stringify(this)}`);
    if (!this.methods) {
      this.methods = {};
    }
    if (!this.methods[name]) {
      this.methods[name] = {};
    }
    if (!this.methods[name][value.length]) {
      this.methods[name][value.length] = value.bind(this);
    }
    if (!this.addMethod) {
      this.addMethod = function (methodName, implementation) {

        if (!this.methods[methodName]) {
          this.methods[methodName] = {};
        }

        this.methods[methodName][implementation.length] =
          implementation.bind(this);
      };
    }
  }
  addInitializer(initializer);
  return function (...args) {
    let method = this.methods[name][args.length];
    if (method) {
      return method(...args);
    } else {
      throw new Error("Method does not exist with this number of arguments");
    }
  };
}

class MyClass {
  constructor(name) {
    this.name = name;
  }
  @overload
  test() {
    return "Initial implementation";
  }
}

let obj = new MyClass("Example");
console.log("obj.test()", obj.test()); 

obj.addMethod("test", function () {
  return "Overloaded implementation";
});
console.log("obj.test()", obj.test());

obj.addMethod("test", function () {
  return this.name;
});
console.log("obj.test()", obj.test());

obj.addMethod("test", function (a) {
  return "Overloaded implementation " + a;
});
console.log("obj.test(\"with argument\")", obj.test("with argument"));

obj.addMethod("test", function (a, b) {
  return "Overloaded implementation " + a + " " + b;
});
console.log("obj.test(\"with argument\", \"and another\")", obj.test("with argument", "and another"));

try {
  obj.test("with argument", "and another", "and another");
} catch (e) {
  console.log(e.message);
}