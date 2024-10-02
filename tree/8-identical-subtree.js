/*
CodeSignal Benchmark
Q. Given an binary tree and a target subtree, determine if the original tree contains a target subtree. A subtree of a tree is a tree consisting of a node in the original tree and all of its descendants while maintaining the same structure.
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

const subTree = {
  value: 5,
  left: {
    value: 6,
    left: null,
    right: null,
  },
  right: null,
};

// WRONG
function solution(root, subTree) {
  let result = false;

  function serialize(node, sub) {
    if (!node) {
      return 'X';
    }

    const left = serialize(node.left);
    const right = serialize(node.right);
    const serializedSub = serialize(sub);

    const serialized = `${node.value},${left},${right}`;

    if (serialized === serializedSub) {
      result = true;
    }

    return serialized;
  }

  serialize(root, subTree);

  return result;
}

console.log(solution(rootTree, subTree));
