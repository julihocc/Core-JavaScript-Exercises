import Node from "./Node.js";

export default class BinaryTree<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.insert(value);
    }
  }

  search(value: T) {
    if (!this.root) {
      return false;
    } else {
      return this.root.search(value);
    }
  }

  // inOrderTraversal method that returns an array of the values in the tree in order
  inOrderTraversal() {
    if (!this.root) {
      return [];
    } else {
      return this._inOrderTraversal(this.root, []);
    }
  }

  _inOrderTraversal(node: Node<T>, result: T[]) {
    if (node.left) {
      this._inOrderTraversal(node.left, result);
    }
    result.push(node.value);
    if (node.right) {
      this._inOrderTraversal(node.right, result);
    }
    return result;
  }

  // preOrderTraversal method that returns an array of the values in the tree in pre-order

  preOrderTraversal() {
    if (!this.root) {
      return [];
    } else {
      return this._preOrderTraversal(this.root, []);
    }
  }

  _preOrderTraversal(node: Node<T>, result: T[]) {
    result.push(node.value);
    if (node.left) {
      this._preOrderTraversal(node.left, result);
    }
    if (node.right) {
      this._preOrderTraversal(node.right, result);
    }
    return result;
  }

  // postOrderTraversal method that returns an array of the values in the tree in post-order
  postOrderTraversal() {
    if (!this.root) {
      return [];
    } else {
      return this._postOrderTraversal(this.root, []);
    }
  }

  _postOrderTraversal(node: Node<T>, result: T[]) {
    if (node.left) {
      this._postOrderTraversal(node.left, result);
    }
    if (node.right) {
      this._postOrderTraversal(node.right, result);
    }
    result.push(node.value);
    return result;
  }

  levelOrderTraversal() {
    if (!this.root) {
      return [];
    } else {
      const result = [];
      const queue = [this.root];
      while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
          result.push(node.value);
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
      }
      return result;
    }
  }

  *[Symbol.iterator]() {
    if (!this.root) {
      return;
    } else {
      yield* this.inOrderTraversal();
    }
  }

  // .find(value) return the first node with the given value or null if that not exists
  find(value: T) {
    if (!this.root) {
      return null;
    } else {
      return this._find(this.root, value);
    }
  }

  _find(node: Node<T>, value: T): Node<T> | null {
    if (node.value === value) {
      return node;
    } else if (value < node.value && node.left) {
      return this._find(node.left, value);
    } else if (value > node.value && node.right) {
      return this._find(node.right, value);
    }
    return null;
  }

  // filter(value) return an array with all the nodes with the given value
  filter(value: T) {
    if (!this.root) {
      return [];
    } else {
      return this._filter(this.root, value);
    }
  }

  _filter(node: Node<T>, value: T): Node<T>[] {
    let result = [];
    if (node.value === value) {
      result.push(node);
    }
    if (node.left) {
      result = result.concat(this._filter(node.left, value));
    }
    if (node.right) {
      result = result.concat(this._filter(node.right, value));
    }
    return result;
  }

  // a method for printing the tree in console
  print() {
    if (!this.root) {
      console.log("Empty tree");
    } else {
      this._print(this.root, 0);
    }
  }

  //_print print the tree as a folder system tree
  // 5 -- 7 -- 6
  //   -- 3 -- 4
  //       -- 3 -- 1
  //             -
  _print(node: Node<T>, level: number) {
    if (node.right) {
      this._print(node.right, level + 1);
    }
    console.log("  -- ".repeat(level) + node.value);
    if (node.left) {
      this._print(node.left, level + 1);
    }
  }
}
