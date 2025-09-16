/*
Copyright 2024

Validate a Binary Search Tree

Determine if a binary tree is a valid binary search tree.

A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.
 

EXAMPLE(S)
     10 <--- root
  5      15
3  7   12  17
isValidBST(root) == True

     30 <--- root
 18      50
3  7   33  77
isValidBST(root) == False
Explanation: 7 is smaller than 18, even though it's the right child.

     30 <--- root
 18      50
3  
  33  77
isValidBST(root) == False
Explanation: 40 is larger than 30, even though it's in the left subtree.

  3 <--- root
1   5
isValidBST(root) == True

    3 <--- root
 1     5
   4
isValidBST(root) == False
 

FUNCTION SIGNATURE
function isValidBST(root) {
def isValidBST(root: Node) -> bool:
*/

function isValidBST(root) {
  function valid(node, minVal, maxVal) {
    if (!node) return true;

    // Check if current node value is within bounds
    if (node.value < minVal || node.value > maxVal) {
      return false;
    }

    // For left subtree: all values must be < current node value
    // For right subtree: all values must be > current node value
    return (
      valid(node.left, minVal, node.value) &&
      valid(node.right, node.value, maxVal)
    );
  }

  return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

const bst = {
  value: 50,
  left: {
    value: 30,
    left: {
      value: 20,
      left: {
        value: 10,
        left: null,
        right: null,
      },
      right: {
        value: 25,
        left: null,
        right: null,
      },
    },
    right: {
      value: 40,
      left: {
        value: 35,
        left: null,
        right: null,
      },
      right: {
        value: 45,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 70,
    left: {
      value: 60,
      left: {
        value: 55,
        left: null,
        right: null,
      },
      right: {
        value: 65,
        left: null,
        right: null,
      },
    },
    right: {
      value: 80,
      left: {
        value: 75,
        left: null,
        right: null,
      },
      right: {
        value: 90,
        left: null,
        right: {
          value: 95,
          left: null,
          right: null,
        },
      },
    },
  },
};

const falseBST = {
  value: 30,
  left: {
    value: 18,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 33,
      left: null,
      right: null,
    },
    right: {
      value: 77,
      left: null,
      right: null,
    },
  },
};

console.log('Valid BST:', isValidBST(bst)); // Should return true
console.log('Invalid BST:', isValidBST(falseBST)); // Should return false
