/*

/*
'''
Iterative Inorder Traversal

Given a binary tree, return an array containing the tree's values in inorder sequence (left, root, right). Your implementation must be iterative—recursion is not allowed.
 

EXAMPLE(S)
   1
 /  
2    3
returns [2, 1, 3]
 

FUNCTION SIGNATURE
function inOrderTraversal(root: TreeNode | null): number[]
def in_order_traversal(root: Optional[TreeNode]) -> List[int]:
'''
*/

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Iterative inorder traversal using a stack
function inOrderTraversal(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    // 1. Walk down the left subtree, pushing nodes onto the stack
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    // 2. Visit the node on top of the stack
    curr = stack.pop();
    result.push(curr.val);
    // 3. Move to the right subtree
    curr = curr.right;
  }
  return result;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildExampleTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
  root.right = new TreeNode(3, new TreeNode(6), new TreeNode(7));
  return root;
}

// small balanced tree
const smallRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(inOrderTraversal(smallRoot)); // expected [2, 1, 3]

// larger tree
console.log(inOrderTraversal(buildExampleTree())); // expected [4, 2, 5, 1, 6, 3, 7]

// empty tree
console.log(inOrderTraversal(null)); // expected []
