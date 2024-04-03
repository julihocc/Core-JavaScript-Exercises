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
    find(value: T): Node<T> | null;
    _find(node: Node<T>, value: T): Node<T> | null;
    filter(value: T): Node<T>[];
    _filter(node: Node<T>, value: T): Node<T>[];
    print(): void;
    _print(node: Node<T>, level: number): void;
    insertSubtree(subtree: BinaryTree<T>): void;
    _insertSubtree(node: Node<T>): void;
    remove(value: T): void;
    _remove(node: Node<T>, value: T): Node<T> | null;
    _findMin(node: any): any;
}
