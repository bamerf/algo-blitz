/*
Find target in a binary search tree
*/

/*
   10
  / \
 9   20
    / \
   18   30
      / 
     25 
*/

const rootTree = {
  value: 10,
  left: { value: 9, left: null, right: null },
  right: {
    value: 20,
    left: {
      value: 18,
      left: null,
      right: null,
    },
    right: {
      value: 30,
      left: {
        value: 25,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

function findTarget(node, target) {
  if (!node) {
    return null;
  }

  if (target < node.value) {
    return findTarget(node.left, target);
  }

  if (target > node.value) {
    return findTarget(node.right, target);
  }

  if (target === node.value) {
    return node;
  }
}

console.log(findTarget(rootTree, 25));
