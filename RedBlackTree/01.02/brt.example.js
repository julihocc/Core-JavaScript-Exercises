import RedBlackTree from "./RedBlackTree.js";

const binaryTree = new RedBlackTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(3);
binaryTree.insert(6);

console.log(binaryTree.levelOrderTraversal()); // [5, 3, 7, 1, 4, 6]
binaryTree.print();
