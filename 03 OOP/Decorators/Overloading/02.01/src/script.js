function Overload(value, context) {
  return class Overload extends value {
    // #methods;
    constructor(...args) {
      super(...args);
      // console.log("Overload this", this);
      // this.#methods = {};
      this.methods = {};
    }
    addMethod(name, methodImplementation) {
      console.log(`Adding method ${name}`);
      console.log(`Method implementation ${methodImplementation}`);
      console.log(
        `Method implementation length ${methodImplementation.length}`
      );
      // if (!this.methods[name]) {
      if (!(name in this.methods)) {
        this.methods[name] = {};
      }
      this.methods[name][methodImplementation.length] =
        methodImplementation.bind(this);
    }
    executeMethod(name, ...args) {
      let method = this.methods[name][args.length];
      if (method) {
        return method(...args);
      } else {
        throw new Error("Method does not exist with this number of arguments");
      }
    }
  };
}

function overload(value, context) {
  const { name, addInitializer } = context;
  addInitializer(function () {
    console.log(`Initializing ${name}`);
    console.log(`this ${JSON.stringify(this)}`);
    this.addMethod(name, value);
  });
}

@Overload
class MyClass {
  constructor(name) {
    this.name = name;
  }
  @overload
  test() {
    console.log("Default implementation", this.name);
  }
}

let obj = new MyClass("Example");
obj.test();
// obj.addMethod("test", function () {
//   console.log("Overloaded implementation", this.name);
// });
// obj.test();
