import BinaryTree from "./BinaryTree.js";

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.print();

const subtree = new BinaryTree();
subtree.insert(4);
subtree.insert(6);
subtree.insert(1);
subtree.print();

tree.insertSubtree(subtree);
tree.print();

tree.remove(3);
tree.print();
