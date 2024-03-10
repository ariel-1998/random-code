import { createNode } from "./functions.js";
import { tree } from "./tree.js";

function printTree(tree, parentId, margin = 0) {
  const div = createNode(tree, tree);
  const parent = document.getElementById(parentId);
  parent.append(div);
  div.style.marginLeft = `${margin}px`;
  tree.children.forEach((child) => {
    if (child.type === "file") {
      return printChild(tree, div, child, margin);
    }
    printTree(child, tree.id, tree.id === "root" ? margin : margin + 10);
  });
}

function printChild(tree, parent, child, margin) {
  const node = createNode(child, tree);
  if (tree.id !== "root") {
    node.style.marginLeft = `${margin + 10}px`;
  }
  parent.append(node);
}
printTree(tree, "tree");
const elemenst = document.querySelectorAll(".wrapper");
console.log(elemenst);
