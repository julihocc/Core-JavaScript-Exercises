import OverloadClass from "./OverloadClass.js";
import overloadMethod from "./overloadMethod.js";

@OverloadClass
class MyClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @overloadMethod
  test(...args: any[]) {
    return "Initial implementation";
  }
}

type TypeofOverloadedClass<T> = T & {
  methods: any;
  addMethod: Function;
};

let obj = new MyClass("Example") as TypeofOverloadedClass<MyClass>;
// console.log("obj.label", obj.label);
obj.methods;
console.log("obj.methods", obj.methods);
console.log("obj.test()", obj.test());
try {
  console.log("obj.test()", obj.test());
} catch (error) {
  if (error instanceof Error) console.error(error.message);
}

obj.addMethod("test", function () {
  return "Overloaded implementation";
});
console.log("obj.test()", obj.test());

obj.addMethod("test", function (this: { name: string }) {
  return this.name;
});
console.log("obj.test()", obj.test());

obj.addMethod("test", function (a: string) {
  return "Overloaded implementation " + a;
});
console.log('obj.test("with argument")', obj.test("with argument"));

obj.addMethod("test", function (a: number, b: number) {
  return "Overloaded implementation " + a + " " + b;
});
console.log(
  'obj.test("with argument", "and another")',
  obj.test("with argument", "and another")
);

try {
  obj.test("with argument", "and another", "and another");
} catch (e) {
  if (e instanceof Error) console.log(e.message);
}
