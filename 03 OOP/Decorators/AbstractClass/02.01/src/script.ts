// interface Context {
//   kind: "class" | "method";
//   name: string;
// }

// ClassDecoratorContext<typeof Person>;
// type Constructor = new (...args: any[]) => any;
type Constructor<T = {}> = new (...args: any[]) => T;

// function abstractClass<T extends Constructor>(
//   value: T,
//   context: ClassDecoratorContext<T>
// ): T;

function abstractClass<T extends Constructor>(
  value: T,
  context: ClassDecoratorContext<T>
) {
  const { kind, name } = context;
  // console.log(`value: ${value}`);
  // console.log(`kind: ${kind}, name: ${name}`);
  if (kind === "class") {
    return class Abstract extends value {
      constructor(...args: any[]) {
        if (new.target === Abstract) {
          throw new Error(`${name} class cannot be instantiated`);
        }
        super(...args);
      }
    };
  }
}

type Method = (...args: any[]) => void;

// function abstractMethod<T extends Method>(
//   value: T,
//   context: ClassMethodDecoratorContext<T>
// ): T;

function abstractMethod<This, Args extends any[], Return>(
  value: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const { kind, name } = context;
  // console.log(`value: ${value}`);
  // console.log(`kind: ${kind}, name: ${name}`);
  if (kind === "method") {
    return function () {
      throw new Error(`${String(name)} method cannot be called`);
    };
  }
}

@abstractClass
class Person {
  @abstractMethod
  work() {}
}

try {
  new Person();
} catch (error) {
  if (error instanceof Error) console.error(error.message); // Abstract classes cannot be instantiated
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
  if (error instanceof Error) console.error(error.message); // Abstract methods cannot be called
}

class Teacher extends Person {
  work() {
    console.log("I'm working...");
  }
}

const teacher = new Teacher();
teacher.work();
