/**
 * Represents a node in a binary tree.
 * @class
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary tree.
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new node with the given value into the binary tree.
   * @param {*} value - The value to be inserted.
   * @returns {void}
   */
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Inserts a new node into a binary tree.
   * @param {Node} node - The current node being evaluated.
   * @param {Node} newNode - The new node to be inserted.
   */
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  *inOrder(node = this.root) {
    if (node) {
      yield* this.inOrder(node.left);
      yield node.value;
      yield* this.inOrder(node.right);
    }
  }

  *preOrder(node = this.root) {
    if (node) {
      yield node.value;
      yield* this.preOrder(node.left);
      yield* this.preOrder(node.right);
    }
  }

  *postOrder(node = this.root) {
    if (node) {
      yield* this.postOrder(node.left);
      yield* this.postOrder(node.right);
      yield node.value;
    }
  }
}

const tree = new BinaryTree();
tree.insert(11);  
tree.insert(7);
tree.insert(15);
tree.insert(5);
console.log([...tree.inOrder()]); // [5, 7, 11, 15]
console.log([...tree.preOrder()]); // [11, 7, 5, 15]
console.log([...tree.postOrder()]); // [5, 7, 15, 11]
