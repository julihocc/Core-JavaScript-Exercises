export default class Policy {
  #policy = []
  addPolicy(callback) {
    this.#policy.push(callback)
  }
  verify(string){
    for (let policy of this.#policy) {
      if (!policy(string)) {
        return false
      }
    }
    return true
  }
}