/*
Coding Drills: Find Height of Binary Tree Variations

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

/*
1. Find height of tree using recursion (basic)
*/

function heightRecursive(node) {
  if (!node) {
    return 0;
  }

  const left = heightRecursive(node.left);
  const right = heightRecursive(node.right);

  return 1 + Math.max(left, right);
}

console.log(heightRecursive(rootTree));

/*
2. Find height of tree using BFS (queue)
*/

function findHeightBfs(node) {
  if (!node) {
    return 0;
  }

  const queue = [node];
  let height = 0;

  while (queue.length > 0) {
    const level = queue.length;
    console.log('level:', level);

    for (let i = 0; i < level; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    height++;
  }

  return height;
}

console.log(findHeightBfs(rootTree));

/*
3. Find height of tree using DFS (stack)
*/

/*
   1
  / \
 2   3
    / \
   4   5
      / 
     6 

stack = []
height = 4
pop = {6, 4}
*/

function heightDfsStack(node) {
  if (!node) {
    return 0;
  }

  const stack = [{ node: node, depth: 1 }];
  let height = 0;

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    height = Math.max(height, depth);

    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }

    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return height;
}

console.log(heightDfsStack(rootTree));

/*
4. Find longest continuous path from the root.
*/

/*
   1
  / \
 2   3
    / \
   4   5
      / 
     6 

stack = [1, 2]
path = []
maxHeight = 0
stack.length = 
pop = 3
*/

function longestPath(root) {
  const stack = [];
  let path = '[]';
  let maxHeight = 0;

  function helper(root) {
    if (!root) {
      if (maxHeight < stack.length) {
        maxHeight = stack.length;
        path = '[' + stack.join('->') + ']';
        console.log('path:', path);
      }
      return;
    }

    stack.push(root.value);
    helper(root.left);
    helper(root.right);
    stack.pop();
  }

  helper(root);

  return path;
}

console.log(longestPath(rootTree));
