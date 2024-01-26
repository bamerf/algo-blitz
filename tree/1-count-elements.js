/*
Q. Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
returns 5

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
        
function countTree(root) {
   - Write your code here.
    return -1
}

- Test Cases
console.log(countTree(null)) // 0
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
console.log(countTree(new TreeNode())) // 1
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

/*
  if left node
    call fn, pass left node
    increment count

  if right node
    call fn, pass left node
    increment count
*/

/*

   1
  / \
 2   3
    / \
   4   5
      / 
     6 

*/

const rootTree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

const countElements = (root) => {
  if (!root) return 0;

  let count = 1;
  count += countElements(root.left);
  count += countElements(root.right);
  return count;
};

const countElements2 = (root) => {
  let count = 0;
  function helper(node) {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    count++;
  }
  helper(root);
  return count;
};

console.log(countElements(rootTree));

console.log(countElements2(null)); // 0
console.log(countElements2(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 3
console.log(
  countElements2(
    new TreeNode(
      2,
      new TreeNode(29, new TreeNode(26)),
      new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
    )
  )
); // 6
console.log(countElements2(new TreeNode())); // 1
