/*
CodeSignal Benchmark

Q. Given a binary tree, return the values of the nodes when facing the tree from the right side (from top to bottom).

Example:
Input:
   1              <---
 /   \
2     5         <---
 \  
  7               <---

Output: [1, 5, 7]
*/

const rootTree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

function rightSideValues(root) {
  const result = [root.value];

  function helper(node) {
    if (!node) {
      return null;
    }

    if (node.right) {
      result.push(node.right.value);
    }

    helper(node.right);
    helper(node.left);
  }

  helper(root);

  return result;
}

console.log(rightSideValues(rootTree));
