/*
https://leetcode.com/problems/insert-into-a-binary-search-tree/

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/

/*

     4
    / \
   2   7
  / \   \
 1   3  [8]
        
*/

const rootTree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: null,
    right: null,
  },
};

function insertIntoBST(root, val) {
  let node = root;

  while (node) {
    if (val < node.value) {
      if (node.left) {
        node = node.left;
      } else {
        node.left = { value: val, left: null, right: null };
        return root;
      }
    } else if (val > node.value) {
      if (node.right) {
        node = node.right;
      } else {
        node.right = { value: val, left: null, right: null };
        return root;
      }
    } else {
      return root;
    }
  }
}

console.log(insertIntoBST(rootTree, 8));
