import overload from "./overload.js";
// Example usage:

type Obj = {
  [key: string]: any;
};

type Sumable = number | string;

let obj: Obj = { x: 5, y: 10 };
obj.test = function () {
  return this.x + this.y;
};
overload(obj, "test", function <T>(a: T) {
  return a;
});
overload(obj, "test", function (a: string) {
  return `a: ${a}`;
});
overload(obj, "test", function (this: { x: number }, a: Sumable, b: Sumable) {
  return +a + +b + this.x;
});
console.log(obj.test());
console.log(obj.test(1));
console.log(obj.test(1, 2));
try {
  obj.test(1, 2, 3);
} catch (e) {
  if (e instanceof Error) console.error(e.message);
}
