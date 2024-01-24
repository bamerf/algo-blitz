class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const rootTree = {
  left: { value: 1, left: null, right: null },
  right: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

const queueRootTree = {
  // left: { value: 1, left: null, right: null },
  // right: {
  //   value: 2,
  // left: {
  //   value: 3,
  //   left: null,
  //   right: null,
  // },
  // right: {
  //   value: 4,
  left: {
    value: 5,
    left: null,
    right: null,
  },
  // right: null,
  // },
  // },
};

function bfs(root, val) {
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();

    if (node.val === val) {
      return node;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return null; // If the value is not found
}

// Example Usage:
// Constructing a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Performing BFS to find a node with value 5
const resultNode = bfs(root, 5);

console.log(resultNode);
