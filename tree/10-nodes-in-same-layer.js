/*
1. given a tree, return an array of nodes on the same layer

results_map = {1: [9, 5], 2: [4], 3: [2]}
if null return 0 
1 

         1
    2         3
  4   5     6   10
9         11

[[9, 5, 11, 10], [4, 6 ], [2, 3], [1]
*/

const rootTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 11,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 10,
      left: null,
      right: null,
    },
  },
};

/*
def treeLayers(root):
 results_map = {}

 def helper(node):
  if not node: return 0
  
  level = 1 + max(helper(node.left), helper(node.right))
  if results_map.get(level):
    results_map[level].append(node.value)
  else: 
    results_map[level] = [node.value]
  return level

 helper(root)
 return results_map
*/

function rightNodeValues(root) {
  const map = new Map();

  function helper(node) {
    if (!node) {
      return 0;
    }

    const level = 1 + Math.max(helper(node.left), helper(node.right));

    if (map.has(level)) {
      const values = map.get(level);
      map.set(level, [...values, node.value]);
    } else {
      map.set(level, [node.value]);
    }

    return level;
  }

  helper(root);

  return map;
}

console.log(rightNodeValues(rootTree));
