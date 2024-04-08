export default class Node<T> {
  value: T;
  id: symbol;
  constructor(value: T) {
    this.value = value;
    this.id = Symbol();
  }
}
