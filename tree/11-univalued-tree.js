/*
https://leetcode.com/problems/univalued-binary-tree/description/
A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

 

Example 1:


Input: root = [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: root = [2,2,2,5,2]
Output: false

- get the value from root.value
- helper recursive function
- go through every node
  - check if value is the same as root value
*/

/*

   1
  / \
 2   3
    / \
   4   5
      / 
     6 

*/

const rootTree = {
  value: 1,
  left: { value: 1, left: null, right: null },
  right: {
    value: 1,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

function isUnivalTree(root) {
  const value = root.value;

  function helper(node) {
    if (!node) {
      return true;
    }

    if (node.value !== value) {
      return false;
    }

    return helper(node.left) && helper(node.right);
  }

  return helper(root);
}

console.log(isUnivalTree(rootTree));
