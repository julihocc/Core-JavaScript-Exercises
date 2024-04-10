// Implement a bind decorator using @ notation
// github.com/tc39/proposal-decorators?tab=readme-ov-file#adding-initialization-logic-with-addinitializer

https: function bound(value, { name, addInitializer }) {
  addInitializer(function () {
    console.log(value);
    console.log(this);
    console.log(name);
    console.log(this[name]);
    this[name] = value.bind(this);
  });
}

class Example {
  constructor(name){
    this.name = name;
  }
  @bound
  fn() {
    console.log(this.name)
  }
}

const example = new Example("Jose");
example.fn()
const fn2 = example.fn
fn2()
