import BinaryTree from "./BinaryTree.js";
import Node from "./Node.js";

class RBNode<T> extends Node<T> {
  parent: RBNode<T> | null;
  color: string;
  constructor(value: T) {
    super(value);
    this.parent = null;
    this.color = "red";
  }
}

export default class RedBlackTree<T> extends BinaryTree<T> {
  root: RBNode<T> | null = null;
  constructor() {
    super();
  }

  insert(value: T) {
    const newNode = new RBNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.fixInsert(newNode);
  }

  insertNode(node: RBNode<T>, newNode: RBNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.left as RBNode<T>, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.right as RBNode<T>, newNode);
      }
    }
  }

  fixInsert(node: RBNode<T>) {
    if (node === this.root) {
      node.color = "BLACK";
      return;
    }
    while (node !== this.root && node.parent && node.parent.color === "RED") {
      let uncle = null;
      if (!node.parent.parent) {
        return;
      }
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right as RBNode<T>;
        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          if (node.parent && node.parent.parent) {
            node.parent.color = "BLACK";
            node.parent.parent.color = "RED";
            this.rotateRight(node.parent.parent);
          }
        }
      } else {
        let uncle = node.parent.parent.left as RBNode<T>;
        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          if (node.parent && node.parent.parent) {
            node.parent.color = "BLACK";
            node.parent.parent.color = "RED";
            this.rotateLeft(node.parent.parent);
          }
        }
      }
    }
    if (this.root !== null) this.root.color = "BLACK";
  }

  rotateLeft(node: RBNode<T>) {
    const rightChild = node.right as RBNode<T>;
    if (rightChild === null) {
      return;
    }
    node.right = rightChild.left;
    if (rightChild.left !== null) {
      (rightChild.left as RBNode<T>).parent = node;
    }
    rightChild.parent = node.parent;
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node: RBNode<T>) {
    const leftChild = node.left as RBNode<T>;
    node.left = leftChild.right as RBNode<T>;
    if (leftChild.right !== null) {
      (leftChild.right as RBNode<T>).parent = node;
    }
    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }
}
