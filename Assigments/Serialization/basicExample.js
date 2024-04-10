class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("John", 30);

// Simple stringification (methods are not included)
const simpleStringified = JSON.stringify(person);
console.log(simpleStringified); // {"name":"John","age":30}


function stringifyClassInstanceWithMethods(instance) {
  const properties = Object.assign({}, instance);
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
    .filter(
      (prop) => typeof instance[prop] === "function" && prop !== "constructor"
    )
    .reduce((acc, methodName) => {
      acc[methodName] = instance[methodName].toString();
      return acc;
    }, {});

  const objIncludingMethods = { ...properties, ...methods };
  return JSON.stringify(objIncludingMethods, null, 2);
}

const detailedStringified = stringifyClassInstanceWithMethods(person);
console.log(detailedStringified);
