/*
Idea behind DFS: 
inorder traversal, preorder traversal, postorder traversal 


node, left  child, right child : 
These combinations are used 
Node,Left,Right - preorder traversal
Left,Right,Node - postorder traversal
Left,Node,Right - inorder traversal 
*/

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

const dfsInOrder = (root, value) => {
  if (!root) {
    return null;
  }

  if (root.left) {
    const left = dfsInOrder(root.left, value);
    if (left !== null) {
      return left;
    }
  }

  if (root.value === value) {
    return root.value;
  }

  if (root.right) {
    const right = dfsInOrder(root.right, value);
    if (right !== null) {
      return right;
    }
  }

  return null;
};

console.log(dfsInOrder(rootTree, 5));

const dfsPreOrder = (root, value) => {
  if (!root) {
    return null;
  }

  if (root.value === value) {
    return root.value;
  }

  if (root.left) {
    const left = dfsPreOrder(root.left, value);
    if (left !== null) {
      return left;
    }
  }

  if (root.right) {
    const right = dfsPreOrder(root.right, value);
    if (right !== null) {
      return right;
    }
  }

  return null;
};

const dfsPostOrder = (root, value) => {
  if (!root) {
    return null;
  }

  if (root.left) {
    const left = dfsPostOrder(root.left, value);
    if (left !== null) {
      return left;
    }
  }

  if (root.right) {
    const right = dfsPostOrder(root.right, value);
    if (right !== null) {
      return right;
    }
  }

  if (root.value === value) {
    return root.value;
  }

  return null;
};
