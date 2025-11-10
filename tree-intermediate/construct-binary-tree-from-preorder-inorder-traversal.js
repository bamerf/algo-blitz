/**
 
You are given two integer arrays: preorder and inorder. The preorder array lists the values of a binary tree according to a preorder traversal (root ➜ left ➜ right). The inorder array lists the values of the same tree according to an inorder traversal (left ➜ root ➜ right). All node values are distinct.
Write a function that reconstructs the original binary tree and returns its root node. If the input arrays are empty, return null.
Example(s)
Input: preorder = [1,2,3], inorder = [2,1,3] ➜ returns a tree where 1 is the root and 2,3 are its left and right children respectively.
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] ➜ returns a tree structured as [3,9,20,null,null,15,7].

 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Reconstruct a binary tree from preorder and inorder traversals.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode|null}
 */
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const idxMap = new Map();
  inorder.forEach((v, i) => idxMap.set(v, i));

  function helper(preL, preR, inL, inR) {
    if (preL > preR) return null;
    const rootVal = preorder[preL];
    const root = new TreeNode(rootVal);
    const pivot = idxMap.get(rootVal);
    const leftSize = pivot - inL;
    root.left = helper(preL + 1, preL + leftSize, inL, pivot - 1);
    root.right = helper(preL + leftSize + 1, preR, pivot + 1, inR);
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
}

module.exports = { buildTree, TreeNode };

function inorder(node, out = []) {
  if (!node) return out;
  inorder(node.left, out);
  out.push(node.val);
  inorder(node.right, out);
  return out;
}

function preorder(node, out = []) {
  if (!node) return out;
  out.push(node.val);
  preorder(node.left, out);
  preorder(node.right, out);
  return out;
}

const cases = [
  [
    [3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7],
  ],
  [
    [1, 2, 3],
    [2, 1, 3],
  ],
  [[], []],
];

for (const [pre, ino] of cases) {
  const root = buildTree(pre, ino);
  console.assert(
    JSON.stringify(preorder(root)) === JSON.stringify(pre),
    'Preorder mismatch'
  );
  console.assert(
    JSON.stringify(inorder(root)) === JSON.stringify(ino),
    'Inorder mismatch'
  );
}
console.log('JavaScript tests passed!');
