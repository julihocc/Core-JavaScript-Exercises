export default class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: T) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  search(value: T): boolean {
    if (this.value === value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.left.search(value);
    } else if (value > this.value && this.right) {
      return this.right.search(value);
    }
    return false;
  }
}
