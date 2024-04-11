import BinaryTree from "./BinaryTree.js";

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);

const subtree = new BinaryTree();
subtree.insert(4);
subtree.insert(6);
subtree.insert(1);

tree.insertSubtree(subtree);

const treeContainer = document.getElementById(
  "tree-container"
) as HTMLDivElement;
treeContainer.innerHTML = tree.getHTML();
