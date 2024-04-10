import Password from "./Password.js";

export default class User{
  #username;
  #password;
  #role;
  static addPasswordPolicy(policy) {
    Password.addPolicy(policy);
  }

  constructor(username, password, role) {
    this.#username = username;
    this.#password = new Password(password);
    this.#role = role;
  }

  get username() {
    return this.#username;
  }

  get role() {
    return this.#role;
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
