"use strict";
// create a class for a binary tree
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // [x] TODO Add element for a general tree
    insert(value) {
        if (value <= this.value) {
            if (!this.left) {
                this.left = new Node(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (!this.right) {
                this.right = new Node(value);
            }
            else {
                this.right.insert(value);
            }
        }
    }
    search(value) {
        if (this.value === value) {
            return true;
        }
        else if (value < this.value && this.left) {
            return this.left.search(value);
        }
        else if (value > this.value && this.right) {
            return this.right.search(value);
        }
        return false;
    }
}
exports.Node = Node;
class BinaryTree {
    root;
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            this.root.insert(value);
        }
    }
    search(value) {
        if (!this.root) {
            return false;
        }
        else {
            return this.root.search(value);
        }
    }
    // inOrderTraversal method that returns an array of the values in the tree in order
    inOrderTraversal() {
        if (!this.root) {
            return [];
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
            yield* this.inOrderTraversal();
        }
    }
    // .find(value) return the first node with the given value or null if that not exists
    find(value) {
        if (!this.root) {
            return null;
        }
        else {
            return this._find(this.root, value);
        }
    }
    _find(node, value) {
        if (node.value === value) {
            return node;
        }
        else if (value < node.value && node.left) {
            return this._find(node.left, value);
        }
        else if (value > node.value && node.right) {
            return this._find(node.right, value);
        }
        return null;
    }
    // filter(value) return an array with all the nodes with the given value
    filter(value) {
        if (!this.root) {
            return [];
        }
        else {
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
    // a method for printing the tree in console
    print() {
        if (!this.root) {
            console.log("Empty tree");
        }
        else {
            console.log("Tree:");
            this._print(this.root, 0);
            console.log("------");
        }
    }
    //_print print the tree as a folder system tree
    // 5 -- 7 -- 6
    //   -- 3 -- 4
    //       -- 3 -- 1
    //             -
    _print(node, level) {
        if (node.right) {
            this._print(node.right, level + 1);
        }
        console.log("  -- ".repeat(level) + node.value);
        if (node.left) {
            this._print(node.left, level + 1);
        }
    }
    // [x] TODO Add insertSubtree method that inserts a subtree into the tree
    insertSubtree(subtree) {
        if (!subtree.root) {
            return;
        }
        this._insertSubtree(subtree.root);
    }
    _insertSubtree(node) {
        this.insert(node.value);
        if (node.left) {
            this._insertSubtree(node.left);
        }
        if (node.right) {
            this._insertSubtree(node.right);
        }
    }
    // [x] TODO Add remove method that removes a node with the given value
    remove(value) {
        if (!this.root) {
            return;
        }
        this.root = this._remove(this.root, value);
    }
    _remove(node, value) {
        if (node.value === value) {
            if (!node.left && !node.right) {
                return null;
            }
            else if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }
            else {
                const min = this._findMin(node.right);
                node.value = min.value;
                node.right = this._remove(node.right, min.value);
                return node;
            }
        }
        else if (value < node.value) {
            node.left = this._remove(node.left, value);
            return node;
        }
        else {
            node.right = this._remove(node.right, value);
            return node;
        }
    }
    _findMin(node) {
        if (!node.left) {
            return node;
        }
        else {
            return this._findMin(node.left);
        }
    }
}
exports.default = BinaryTree;
