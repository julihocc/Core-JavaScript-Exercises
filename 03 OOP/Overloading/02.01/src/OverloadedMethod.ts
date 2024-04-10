export default class OverloadedMethod {
  #nameOfMethod:string;
  #methods: Record<number, Function>;
  context: any;

  constructor(nameOfMethod: string, context: any) {
    this.#nameOfMethod = nameOfMethod;
    this.#methods = {};
    this.context = context;
  }

  addMethod(methodImplementation: Function) {
    // this.methods.set(methodImplementation.length, methodImplementation);
    this.#methods[methodImplementation.length] = methodImplementation.bind(
      this.context
    );
  }

  executeMethod(...args: any[]) {
    // console.log("Available methods:", this.methods);
    // let method = this.methods.get(args.length);
    let method = this.#methods[args.length];
    if (method) {
      return method(...args);
    } else {
      throw new Error("Method does not exist with this number of arguments");
    }
  }
}
