function validateNumber(value, context){
  const {kind} = context;
    if (kind==="setter"){
      return function(x){
        if (typeof x !== "number"){
          throw new Error("Invalid value");
        }
        const output = value.call(this, x);
        return output;
      }
    }
}

class Person{
  #name
  #age
  constructor(name, age){
    this.#name = name;
    this.#age = age;
  }
  get age(){
    return this.#age;
  }
  @validateNumber
  set age(value){
    this.#age = value;
  }
}

const person = new Person("John", 30);
person.age = 40;
console.log(person.age); // 40

try {
  person.age = "forty";
} catch (error) {
  console.error(error.message); // Invalid value
}