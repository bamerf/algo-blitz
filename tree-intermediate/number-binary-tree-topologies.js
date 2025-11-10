/**

Given a non-negative integer n, return the number of structurally distinct binary tree topologies that can be formed using exactly n nodes. Two trees are considered different if their shape differs at any position (left vs. right child counts as different). Node values are irrelevant; only structure matters. The empty tree (n = 0) counts as one topology. You may assume 0 \u2264 n \u2264 19 so the answer fits in a 64-bit signed integer.
Example(s)
Input: n = 3
Output: 5

Input: n = 0
Output: 1
Signature/Prototype
def num_binary_tree_topologies(n: int) -> int:
function numBinaryTreeTopologies(n) -> number

 */

/**
 * @param {number} n
 * @return {number}
 */
function numBinaryTreeTopologies(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // base case: empty tree

  for (let nodes = 1; nodes <= n; nodes++) {
    let total = 0;
    for (let left = 0; left <= nodes - 1; left++) {
      const right = nodes - 1 - left;
      total += dp[left] * dp[right];
    }
    dp[nodes] = total;
  }
  return dp[n];
}

console.assert(numBinaryTreeTopologies(0) === 1, 'Failed for n=0');
console.assert(numBinaryTreeTopologies(1) === 1, 'Failed for n=1');
console.assert(numBinaryTreeTopologies(2) === 2, 'Failed for n=2');
console.assert(numBinaryTreeTopologies(3) === 5, 'Failed for n=3');
console.assert(numBinaryTreeTopologies(4) === 14, 'Failed for n=4');
console.assert(numBinaryTreeTopologies(5) === 42, 'Failed for n=5');
console.assert(numBinaryTreeTopologies(6) === 132, 'Failed for n=6');

console.log('✅ All JavaScript tests passed.');
