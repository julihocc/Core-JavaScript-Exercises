function validateNumber<This, Evaluated>(
  target: (this: This, x: Evaluated) => void,
  context: ClassSetterDecoratorContext<This, Evaluated>
) {
  const { kind } = context;
  if (kind === "setter") {
    return function (this: This, x: Evaluated) {
      if (typeof x !== "number") {
        throw new Error("Invalid value");
      }
      const output = target.call(this, x);
      return output;
    };
  }
}

class Person {
  #name;
  #age;
  constructor(name: string, age: number) {
    this.#name = name;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  @validateNumber
  set age(x) {
    this.#age = x;
  }
}

const person = new Person("John", 30);
person.age = 40;
console.log(person.age); // 40
