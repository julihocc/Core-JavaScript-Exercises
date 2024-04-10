function abstract(value, context) {
  const { kind, name } = context;
  // console.log(`value: ${value}`);
  // console.log(`kind: ${kind}, name: ${name}`);
  if (kind === "class") {
    return class extends value {
      constructor(...args) {
        super(...args);
        if (new.target.name === "_class") {
          throw new Error(`${name} class cannot be instantiated`);
        }
      }
    };
  }
  if (kind === "method") {
    return function () {
        throw new Error(`${name} method cannot be called`);
    }
  }
}

@abstract
class Person {
  @abstract
  work() {
  }
}

try {
  new Person();
} catch (error) {
  console.error(error.message); // Abstract classes cannot be instantiated
}

class Student extends Person {
  constructor() {
    super();
    console.log("Student class instantiated");
  }
}

const student = new Student();

try {
  console.log(student.work());
} catch (error) {
  console.error(error.message); // Abstract methods cannot be called
}

class Teacher extends Person {
  work() {
    console.log("I'm working...");
  }
}

const teacher = new Teacher();
teacher.work();