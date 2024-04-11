/*
  Q. Given a BST and a target element's value, insert the target in the appropriate position. Do not make any changes to the structure of the tree other than to add the one node.

  https://app.codesignal.com/test/bAn7GupveDkbFJ9yF/question/LqSpuLPjWBBBJCbCe


*/

const insertTargetBST = (root, target) => {
  if (!root) {
    return new Tree(target);
  }

  if (target < root.value) {
    root.left = solution(root.left, target);
  } else if (target > root.value) {
    root.right = solution(root.right, target);
  }

  return root;
};
