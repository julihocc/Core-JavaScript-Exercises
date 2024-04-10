export default class Password {
  #password;
  static #policies = [];
  static get policies() {
    return [...this.#policies];
  }
  static addPolicy(policy) {
    this.#policies.push(policy);
  }
  static validate(password) {
    for (const policy of Password.policies) {
      if (!policy(password)) {
        throw new Error("Password does not meet policy");
      }
    }
  }
  constructor(password) {
    Password.validate(password);
    this.#password = password;
  }

  compare(password) {
    return this.#password === password;
  }
}

// const policies = [
//   password => password.length > 8,
//   password => /[a-zA-Z]/.test(password[0]),
// ]

// try {
//   new Password('qwerty', policies).validate();
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   new Password('1password', policies).validate();
// }	catch (error) {   
//   console.error(error.message);
// }

// try {
//   new Password('holaMundo', policies).validate();
// }
// catch (error) {
//   console.error(error.message);
// }

