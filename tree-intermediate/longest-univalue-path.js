/**
 
You are given the root of a binary tree in which every node has an integer value. A path is any sequence of nodes where each pair of consecutive nodes in the sequence has a parent-child relationship.
A "univalue" path is a path in which every node on the path has the same value. The length of a path is defined as the number of edges between the first and last node.
Return the length of the longest univalue path that exists anywhere in the tree. If no such path longer than a single node exists, return 0.
Example(s)
Example 1:
Input: [5,4,5,4,4,null,5]
Output: 2
Explanation: The longest path is 4 -> 4 -> 4 or 5 -> 5 -> 5 (2 edges).

Example 2:
Input: [1,4,5,4,4,null,5]
Output: 2

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val === undefined ? 0 : val);
 *   this.left = (left === undefined ? null : left);
 *   this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = function (root) {
  let longest = 0; // best answer so far

  const dfs = (node) => {
    if (!node) return 0;

    // Recurse on subtrees
    const leftLen = dfs(node.left);
    const rightLen = dfs(node.right);

    // Extend only if child value matches
    const leftPath = node.left && node.left.val === node.val ? leftLen + 1 : 0;
    const rightPath =
      node.right && node.right.val === node.val ? rightLen + 1 : 0;

    // Update global maximum with path that passes through current node
    longest = Math.max(longest, leftPath + rightPath);

    // Return length of a path that can be extended upward
    return Math.max(leftPath, rightPath);
  };

  dfs(root);
  return longest;
};

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i >= arr.length) break;
    if (arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// ------- test cases -------
// Make sure longestUnivaluePath is in scope before running
console.assert(longestUnivaluePath(buildTree([])) === 0, 'Empty tree');
console.assert(longestUnivaluePath(buildTree([1])) === 0, 'Single node');
console.assert(
  longestUnivaluePath(buildTree([5, 4, 5, 4, 4, null, 5])) === 2,
  'Example 1'
);
console.assert(
  longestUnivaluePath(buildTree([1, 4, 5, 4, 4, null, 5])) === 2,
  'Example 2'
);
console.log('All JavaScript tests passed!');
