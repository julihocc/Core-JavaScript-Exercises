import deepCopy from "./deepCopy.js";

function deepCopyDecorator<This, T extends object}>(
  target: (this: This) => T & { [key: string]: any },
  context: ClassGetterDecoratorContext<This, T>
) {
  if (context.kind !== "getter") {
    throw new Error("@deepCopyDecorator can only be applied to getters");
  }

  // const originalGetter = target;

  return function (this: This) {
    const result = target.call(this);
    // return JSON.parse(JSON.stringify(result));
    return deepCopy(result);
  };
}

class Example {
  #data;
  constructor() {
    this.#data = {
      array: [1, 2, 3],
      object: { key: "value" },
    };
  }

  @deepCopyDecorator
  get data() {
    return this.#data;
  }
}

const example = new Example();
const dataCopy = example.data;

console.log(dataCopy);
dataCopy.array.push(4);
console.log(example.data);
