import { createNode } from "./functions.js";
import { tree } from "./tree.js";

function printTree(tree, parentId, margin = 0) {
  const div = createNode(tree);
  const parent = document.getElementById(parentId);
  parent.append(div);
  div.style.marginLeft = `${margin}px`;
  tree.children.forEach((child) => {
    if (child.type === "file") {
      const node = createNode(child);
      div.append(node);
      return;
    }
    printTree(child, tree.id, margin + 10);
  });
  console.log(tree.name, parentId);
}
printTree(tree, "tree");
