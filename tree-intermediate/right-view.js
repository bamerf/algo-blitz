/**
 
Given a binary tree t, return its right view. To understand what the right view of the tree means, imagine yourself standing on the right side of the tree: The right view will be all the vertices that you can see. For example, imagine the following tree:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 /
6               <---
In this case, you can see vertices 1, 3, 4, and 6.

Given binary tree t, return the values of the vertices in the right view, ordered from top to bottom.

Example

For

t = {
    "value": 5,
    "left": {
        "value": 3,
        "left": null,
        "right": {
            "value": -1,
            "left": {
                "value": 8,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": {
            "value": 10,
            "left": null,
            "right": null
        }
    }   
}
the output should be solution(t) = [5, 4, 10, 8].

Here is a tree from example:

   5
 /   \
3     4
 \     \
  -1    10
 /
8

 */

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * Solution: Right View of Binary Tree
 *
 * The right view shows the rightmost node at each level when viewing from the right side.
 * Approach: Use BFS (level-order traversal) and take the last node of each level.
 *
 * Alternative approach: DFS with right-first traversal, tracking depth and only
 * recording the first node encountered at each depth level.
 */

function solution(t) {
  if (!t) return [];

  const result = [];
  const queue = [t];

  while (queue.length > 0) {
    const levelSize = queue.length;

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      // If this is the last node in the current level, add to result
      if (i === levelSize - 1) {
        result.push(node.value);
      }
    }
  }

  return result;
}
