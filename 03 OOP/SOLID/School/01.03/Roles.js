import User from "./User.js";

User.addPasswordPolicy((password) => password.length >= 8);
User.addPasswordPolicy((password) => /[a-zA-Z]/.test(password[0]));

try {
  new User("user", "pass");
} catch {
  console.error("Short password");
}

try {
  new User("user", "1password");
} catch {
  console.error("Password must start with a letter");
}

export class Academic extends User {
  #classes = [];
  #role;
  constructor(username, password, role) {
    super(username, password);
    this.#role = role;
  }
  addClass(className) {
    this.#classes.push(className);
  }
  get classes() {
    return this.#classes;
  }
  get role() {
    return this.#role;
  }
}

export class Student extends Academic {
  constructor(username, password) {
    super(username, password, "student");
  }
}

export class Teacher extends Academic {
  #role = "teacher";
  constructor(username, password) {
    super(username, password, "teacher");
  }
}