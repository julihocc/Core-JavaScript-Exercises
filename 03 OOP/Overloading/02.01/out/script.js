import overload from "./overload.js";
let obj = { x: 5, y: 10 };
obj.test = function () {
  return this.x + this.y;
};
overload(obj, "test", function (a) {
  return a;
});
overload(obj, "test", function (a) {
  return `a: ${a}`;
});
overload(obj, "test", function (a, b) {
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
