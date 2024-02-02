/*
https://leetcode.com/problems/binary-tree-pruning/description/

Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.
*/

/*

       1
    /     \
   0       1
  / \     /  \
 0   0   0    1


   1
    \
     1
      \
       1
        
*/

const rootTree = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: 0,
      left: null,
      right: null,
    },
    right: {
      value: 0,
      left: null,
      right: null,
    },
  },
  right: {
    value: 1,
    left: { value: 0, left: null, right: null },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

function pruneTree(node) {
  if (!node) {
    return null;
  }

  node.left = pruneTree(node.left);
  node.right = pruneTree(node.right);

  if (node.value === 1 || node.left !== null || node.right !== null) {
    return node;
  }

  return null;
}

console.log(pruneTree(rootTree));
