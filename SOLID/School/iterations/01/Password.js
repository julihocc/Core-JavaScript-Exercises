export default class Password {
  #password
  #policies
  constructor(password, policies=[]) {
    this.#password = password;
    this.#policies = policies;
    this.validate();
  }
  validate() {
    for (const policy of this.#policies) {
      if (!policy(this.#password)) {
        throw new Error('Password does not meet policy');
      }
    }
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

