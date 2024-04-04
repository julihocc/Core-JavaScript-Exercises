import BinaryTree from "./BinaryTree.js";
import Node from "./Node.js";

const binaryTree = new BinaryTree<number>();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(3);
binaryTree.insert(6);

console.log(binaryTree.inOrderTraversal()); // [1, 3, 4, 5, 6, 7]
console.log(binaryTree.preOrderTraversal()); // [5, 3, 1, 4, 7, 6]
console.log(binaryTree.postOrderTraversal()); // [1, 4, 3, 6, 7, 5]
console.log(binaryTree.levelOrderTraversal()); // [5, 3, 7, 1, 4, 6]
console.log([...binaryTree]);

console.log(binaryTree.search(3)); // true
console.log(binaryTree.find(3));

const just3 = binaryTree.filter(3);
console.log(just3.map((node: Node<number>) => node.value)); // [3, 3, 3]

binaryTree.print();
