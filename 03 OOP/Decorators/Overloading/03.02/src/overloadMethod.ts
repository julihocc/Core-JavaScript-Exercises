type ThisWithMethods<This> = This & { _methods?: any, getMethod: Function};

export default function overloadMethod<This,Return>(
  target: (this: This, ...args: any[]) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: any[]) => Return
  >
) {
  const { name, addInitializer } = context;
  function initializer(this: This) {
    // console.log(`Initializing ${name}`);
    // console.log(`this ${JSON.stringify(this)}`);

    const thisWithMethods = this as ThisWithMethods<This>;

    if (!thisWithMethods._methods) {
      thisWithMethods._methods = {};
    }
    // console.log("this._methods", this._methods);
    if (!thisWithMethods._methods[name]) {
      thisWithMethods._methods[name] = {};
      // console.log("this._methods[name]", this._methods[name]);
    }
    if (!thisWithMethods._methods[name][target.length]) {
      thisWithMethods._methods[name][target.length] = target.bind(this);
    }
    // console.log("this._methods", this._methods);
  }
  addInitializer(initializer);
  return function (this: This, ...args:any[]) {
    // let method = this.methods[name][args.length];
    const thisWithMethods = this as ThisWithMethods<This>;
    let method = thisWithMethods.getMethod(name, args.length);
    if (method) {
      return method(...args);
    } else {
      throw new Error("Method does not exist with this number of arguments");
    }
  };
}
