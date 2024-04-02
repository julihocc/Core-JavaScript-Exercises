// Implement a stack
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Stack_length;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export default class Stack {
    constructor() {
        _Stack_length.set(this, 0);
        this.head = null;
        this.tail = null;
    }
    push(value) {
        var _a;
        __classPrivateFieldSet(this, _Stack_length, (_a = __classPrivateFieldGet(this, _Stack_length, "f"), _a++, _a), "f");
        console.log("push", value);
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    pop() {
        var _a;
        if (this.head === null) {
            __classPrivateFieldSet(this, _Stack_length, 0, "f");
            return null;
        }
        __classPrivateFieldSet(this, _Stack_length, (_a = __classPrivateFieldGet(this, _Stack_length, "f"), _a--, _a), "f");
        const value = this.head.value;
        console.log("pop", value);
        this.head = this.head.next;
        return value;
    }
    *[(_Stack_length = new WeakMap(), Symbol.iterator)]() {
        let current = this.head;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }
    get length() {
        return __classPrivateFieldGet(this, _Stack_length, "f");
    }
}
