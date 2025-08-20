/**
 * Given a binary tree, return the sum of all root-to-leaf paths.
 
     1 <--- root
  2      3
4   5  6   7
sumAllTreePaths(root) == 36

Explanation:
* The leftmost path: 1 + 2 + 4 = 7
* The left-middle path: 1 + 2 + 5 = 8
* The right-middle path: 1 + 3 + 6 = 10
* The rightmost path: 1 + 3 + 7 =  11

Aggregating the paths: 7 + 8 + 10 + 11 = 36
 */

function sumAllTreePaths(root) {
  let total = 0;

  function helper(node, sumSoFar) {
    if (node === null) {
      return;
    }

    if (!node.left && !node.right) {
      total += sumSoFar + node.val;
      return;
    }

    if (node.left) {
      helper(node.left, sumSoFar + node.val);
    }

    if (node.right) {
      helper(node.right, sumSoFar + node.val);
    }
  }

  helper(root, 0);

  return total;
}

// Helper function to create tree nodes
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test Cases
console.log('🧪 Testing your solution...\n');

// Test 1: Given example
//     1
//   2   3
//  4 5 6 7
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log('Test 1 - Given example:');
console.log('Expected: 36, Got:', sumAllTreePaths(root1));

// Test 2: Single node
const root2 = new TreeNode(10);
console.log('\nTest 2 - Single node:');
console.log('Expected: 10, Got:', sumAllTreePaths(root2));

// Test 3: Your simple test case
//   5
//  / \
// 2   3
const root3 = new TreeNode(5, new TreeNode(2), new TreeNode(3));
console.log('\nTest 3 - Simple case:');
console.log('Expected: 15, Got:', sumAllTreePaths(root3));

// Test 4: Unbalanced tree
//   1
//  /
// 2
//  \
//   3
const root4 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)));
console.log('\nTest 4 - Unbalanced tree:');
console.log('Expected: 6, Got:', sumAllTreePaths(root4));

// Test 5: Negative values
//    -1
//   /  \
//  2   -3
const root5 = new TreeNode(-1, new TreeNode(2), new TreeNode(-3));
console.log('\nTest 5 - Negative values:');
console.log('Expected: -3, Got:', sumAllTreePaths(root5));

console.log('\n✅ All tests complete!');
