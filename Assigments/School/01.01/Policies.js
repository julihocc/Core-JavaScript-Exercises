export default class Policies {
  static #policies = [];
  static addPolicy(policy) {
    this.#policies.push(policy);
  }
  static get policies() {
    return [...this.#policies];
  }

  constructor() {
    if (new.target === Policies) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
}