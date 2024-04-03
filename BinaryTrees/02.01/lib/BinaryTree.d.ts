export declare class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T);
    insert(value: T): void;
    search(value: T): boolean;
}
export default class BinaryTree<T> {
    root: Node<T> | null;
    constructor();
    insert(value: T): void;
    search(value: T): boolean;
    inOrderTraversal(): T[];
    _inOrderTraversal(node: Node<T>, result: T[]): T[];
    preOrderTraversal(): T[];
    _preOrderTraversal(node: Node<T>, result: T[]): T[];
    postOrderTraversal(): T[];
    _postOrderTraversal(node: Node<T>, result: T[]): T[];
    levelOrderTraversal(): T[];
    [Symbol.iterator](): Generator<T, void, undefined>;
    find(value: any): any;
    _find(node: any, value: any): any;
    filter(value: any): any;
    _filter(node: any, value: any): any;
    print(): void;
    _print(node: any, level: any): void;
    insertSubtree(subtree: any): void;
    _insertSubtree(node: any): void;
    remove(value: any): void;
    _remove(node: any, value: any): any;
    _findMin(node: any): any;
}
