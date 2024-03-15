import deepCopy from "./deepCopy.js";

function deepCopyDecorator(value, context) {
  if (context.kind !== "getter") {
    throw new Error("@deepCopyDecorator can only be applied to getters");
  }

  const originalGetter = value;

  return function() {
      const result = originalGetter.call(this);
      // return JSON.parse(JSON.stringify(result));
      return deepCopy(result);
    }
}

class Example {
  #data
  constructor() {
    this.#data = {
      array: [1, 2, 3],
      object: { key: 'value' }
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
