const _ = require("lodash");

function Overload(value) {
  return class Overload extends value {
    #methods;
    constructor(...args) {
      super(...args);
      this.label = "Overload";
      this.#methods = _.cloneDeep(this._methods);
      delete this._methods;
    }
    get methods() {
      return this.#methods;
    }
    addMethod(methodName, implementation) {
      if (!this.methods[methodName]) {
        this.methods[methodName] = {};
      }

      this.methods[methodName][implementation.length] =
        implementation.bind(this);
    }
  };
}

function overload(value, context) {
  const { name, addInitializer } = context;
  function initializer() {
    // console.log(`Initializing ${name}`);
    // console.log(`this ${JSON.stringify(this)}`);
    if (!this._methods) {
      this._methods = {};
    }
    console.log("this.methods", this._methods);
    if (!this._methods[name]) {
      this._methods[name] = {};
    }
    if (!this._methods[name][value.length]) {
      this._methods[name][value.length] = value.bind(this);
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

@Overload
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
console.log("obj.label", obj.label);
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
console.log('obj.test("with argument")', obj.test("with argument"));

obj.addMethod("test", function (a, b) {
  return "Overloaded implementation " + a + " " + b;
});
console.log(
  'obj.test("with argument", "and another")',
  obj.test("with argument", "and another")
);

try {
  obj.test("with argument", "and another", "and another");
} catch (e) {
  console.log(e.message);
}
