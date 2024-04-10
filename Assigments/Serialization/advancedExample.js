class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static serialize(instance) {
    return JSON.stringify({
      name: instance.name,
      age: instance.age,
      greet: instance.greet.toString(),
    });
  }

  // static deserialize(serializedData) {
  //   const data = JSON.parse(serializedData);
  //   const person = new Person(data.name, data.age);
  //   return person;
  // }

  static deserialize(serializedData) {
    const data = JSON.parse(serializedData);
    const person = Object.assign({}, data);
    const greetBody = data.greet.substring(
      data.greet.indexOf("{") + 1,
      data.greet.lastIndexOf("}")
    );
    const greetFunction = new Function(greetBody);
    person.greet = greetFunction;
    return person;
  }
}

const person = new Person("John", 30);

const serialized = Person.serialize(person);
console.log(serialized);

const deserialized = Person.deserialize(serialized);
deserialized.greet();
