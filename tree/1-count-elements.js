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

function countTree(root) {
  if (!root) {
    return 0;
  }

  let count = 1;

  count += countTree(root.left);
  count += countTree(root.right);

  return count;
}

console.log(countTree(rootTree));
