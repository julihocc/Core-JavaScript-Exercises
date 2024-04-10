// create a class for a binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
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

  search(value) {
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

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.insert(value);
    }
  }

  search(value) {
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

  _inOrderTraversal(node, result) {
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

  _preOrderTraversal(node, result) {
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

  _postOrderTraversal(node, result) {
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
        result.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return result;
    }
  }

  *[Symbol.iterator]() {
    if (!this.root) {
      return;
    } else {
      yield* this.inOrderTraversal(this.root);
    }
  }

  // .find(value) return the first node with the given value or null if that not exists
  find(value) {
    if (!this.root) {
      return null;
    } else {
      return this._find(this.root, value);
    }
  }

  _find(node, value) {
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
  filter(value) {
    if (!this.root) {
      return [];
    } else {
      return this._filter(this.root, value);
    }
  }

  _filter(node, value) {
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

  // TODO Create an interface for showing the tree in the browser
  // a method for printing the tree in console
  print() {
    if (!this.root) {
      console.log("Empty tree");
    } else {
      this._print(this.root, 0);
    }
  }

  _print(node, level) {
    if (node.right) {
      this._print(node.right, level + 1);
    }
    console.log("  -- ".repeat(level) + node.value);
    if (node.left) {
      this._print(node.left, level + 1);
    }
  }
}
