export default class Node {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
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
