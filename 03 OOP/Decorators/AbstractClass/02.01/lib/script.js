"use strict";
// interface Context {
//   kind: "class" | "method";
//   name: string;
// }
// function abstractClass<T extends Constructor>(
//   value: T,
//   context: ClassDecoratorContext<T>
// ): T;
function abstractClass(value, context) {
    const { kind, name } = context;
    // console.log(`value: ${value}`);
    // console.log(`kind: ${kind}, name: ${name}`);
    if (kind === "class") {
        return class Abstract extends value {
            constructor(...args) {
                if (new.target === Abstract) {
                    throw new Error(`${name} class cannot be instantiated`);
                }
                super(...args);
            }
        };
    }
}
// function abstractMethod<T extends Method>(
//   value: T,
//   context: ClassMethodDecoratorContext<T>
// ): T;
function abstractMethod(value, context) {
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
    work() { }
}
try {
    new Person();
}
catch (error) {
    if (error instanceof Error)
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
}
catch (error) {
    if (error instanceof Error)
        console.error(error.message); // Abstract methods cannot be called
}
class Teacher extends Person {
    work() {
        console.log("I'm working...");
    }
}
const teacher = new Teacher();
teacher.work();
