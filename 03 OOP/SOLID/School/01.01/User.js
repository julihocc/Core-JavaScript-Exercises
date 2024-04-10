import Policies from "./Policies.js";
import Password from "./Password.js";

Policies.addPolicy((password) => password.length >= 8);
Policies.addPolicy((password) => /[a-zA-Z]/.test(password[0]));

export default class User{
  #username;
  #password;
  constructor(username, password) {
    this.#username = username;
    this.#password = new Password(password, Policies.policies);
  }

  get username() {
    return this.#username;
  }

  changePassword(oldPassword, newPassword) {
    if (this.#password === oldPassword) {
      this.#password = newPassword;
    }
  }
  changeUsername(password, newUsername) {
    if (this.#password.compare(password)) {
      this.#username = newUsername;
    } else {
      throw new Error("Invalid password");
    }
  }
}
