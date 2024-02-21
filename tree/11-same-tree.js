/*
https://leetcode.com/problems/same-tree/description/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false

- serialize trees, compared them and return
*/

const treeOne = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 4,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

const treeTwo = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 4,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

function isSameTree(treeOne, treeTwo) {
  function serialize(node) {
    if (!node) {
      return 'X';
    }

    const left = serialize(node.left);
    const right = serialize(node.right);

    return `${node.value},${left},${right}`;
  }

  const serializedTreeOne = serialize(treeOne);
  const serializedTreeTwo = serialize(treeTwo);

  return serializedTreeOne === serializedTreeTwo;
}

console.log(isSameTree(treeOne, treeTwo));
