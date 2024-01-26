/*
https://leetcode.com/problems/find-duplicate-subtrees/description/

Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

Example 1:

Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
Example 2:


Input: root = [2,1,1]
Output: [[1]]
Example 3:


Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
*/

const rootTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 3,
    left: {
      value: 2,
      left: {
        value: 4,
        right: null,
        left: null,
      },
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
};

function serializeTree(node, subtreeCounts, duplicates) {
  if (node === null) {
    return '#';
  }

  const left = serializeTree(node.left, subtreeCounts, duplicates);
  const right = serializeTree(node.right, subtreeCounts, duplicates);

  const subtree = `${node.value},${left},${right}`;

  console.log('subtree:', subtree);
  subtreeCounts[subtree] = (subtreeCounts[subtree] || 0) + 1;

  if (subtreeCounts[subtree] === 2) {
    duplicates.push(node);
  }

  return subtree;
}

function extractValues(node) {
  if (node === null) {
    return [];
  }

  return [
    node.value,
    ...extractValues(node.left),
    ...extractValues(node.right),
  ];
}

const findDuplicateSubtrees = function (root) {
  const subtreeCounts = {};
  const duplicates = [];

  serializeTree(root, subtreeCounts, duplicates);

  return duplicates.map((node) => extractValues(node));
};

console.log(findDuplicateSubtrees(rootTree));
