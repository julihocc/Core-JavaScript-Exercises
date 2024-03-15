import User from './User.js';

new User('user', 'password');

try { 
  new User('user', 'pass');
} catch {
  console.error("Short password")
} 

try {
  new User('user', '1password');
} catch {
  console.error("Password must start with a letter")
}

class Student extends User {
  #classes = []
  constructor(username, password) {
    super(username, password);
  }
  addClass (className) {
    this.#classes.push(className);
  }
  get classes() {
    return this.#classes;
  }
}

const student = new Student("rambo123", 'holaMundo');
student.addClass('Math');
student.addClass('Science');
console.log(student.classes)
console.log(student.username)
student.changeUsername('holaMundo', 'rambo1234');
console.log(student.username)