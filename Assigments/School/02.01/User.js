import Password from "./Password.js";

export default class User{
  #username;
  #password; 
  static addPasswordPolicy(policy) {
    Password.addPolicy(policy);
  }

  constructor(username, password ) {
    this.#username = username;
    this.#password = new Password(password); 
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
