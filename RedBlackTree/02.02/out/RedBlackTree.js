import BinaryTree from "./BinaryTree.js";
import Node from "./Node.js";
class RBNode extends Node {
    parent;
    color;
    constructor(value) {
        super(value);
        this.parent = null;
        this.color = "red";
    }
}
export default class RedBlackTree extends BinaryTree {
    root = null;
    constructor() {
        super();
    }
    insert(value) {
        const newNode = new RBNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
        this.fixInsert(newNode);
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    fixInsert(node) {
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
                let uncle = node.parent.parent.right;
                if (uncle && uncle.color === "RED") {
                    node.parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node.parent.parent.color = "RED";
                    node = node.parent.parent;
                }
                else {
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
            }
            else {
                let uncle = node.parent.parent.left;
                if (uncle && uncle.color === "RED") {
                    node.parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node.parent.parent.color = "RED";
                    node = node.parent.parent;
                }
                else {
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
        if (this.root !== null)
            this.root.color = "BLACK";
    }
    rotateLeft(node) {
        const rightChild = node.right;
        if (rightChild === null) {
            return;
        }
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        }
        else if (node === node.parent.left) {
            node.parent.left = rightChild;
        }
        else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }
    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        }
        else if (node === node.parent.right) {
            node.parent.right = leftChild;
        }
        else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }
}
