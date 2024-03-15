import User from './User.js';

User.addPasswordPolicy((password) => password.length >= 8);
User.addPasswordPolicy((password) => /[a-zA-Z]/.test(password[0]));

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

class Academic extends User {
  #classes = []
  constructor(username, password, role) {
    super(username, password, role);
  }
  addClass (className) {
    this.#classes.push(className);
  }
  get classes() {
    return this.#classes;
  }
}

class Student extends Academic {
  constructor(username, password) {
    super(username, password, 'student');
  }
}

class Teacher extends Academic {
  #role = "teacher";
  constructor(username, password) {
    super(username, password, 'teacher');
  }
}


let student 
student = new Academic("rambo123", "holaMundo");
student = new Student("rambo123", 'holaMundo');
student = new Teacher("rambo123", 'holaMundo');
student.addClass('Math');
student.addClass('Science');
console.log(student.classes)
console.log(student.username)
student.changeUsername('holaMundo', 'rambo1234');
console.log(student.username)
console.log(student.role)