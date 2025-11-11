/*

Q. Given a binary tree, print the level order traversal so that each level of nodes is stored in a separate list, going from left to right.

Examples:

Given a binary tree:
                 1
                / \ 
               2   3
returns [[1], [2, 3]] 

Given a binary tree:
                 1
                / \
               2   3
              / \
             4   5
 returns [[1], [2, 3], [4, 5]] 

*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * Solution: Level Order Traversal
 *
 * Perform BFS (level-order traversal) and group nodes by level.
 * Each level's nodes are stored in a separate array.
 */

function solution(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);

      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Add the current level to result
    result.push(currentLevel);
  }

  return result;
}
