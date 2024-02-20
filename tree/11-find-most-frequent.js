/*
'''
❓ PROMPT
Given a binary tree with node values represented as integers, find and return the most frequent node value.

You can assume there will always be a most frequent node and no ties.

Example(s)
    5 <--- root
print(findMostFrequentNodeValue(root) == 5)

    5 <--- root
 10   5
print(findMostFrequentNodeValue(root) == 5)

    6 <--- root
  6   6
 6 6
print(findMostFrequentNodeValue(root) == 6)
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function findMostFrequentNodeValue(root) {
def findMostFrequentNodeValue(root: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

- hash to store the node & frequency
- go through the tree
  - recursive helper function
- loop through the hash and return the most frequent
*/

const rootTree = {
  value: 1,
  left: { value: 1, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

function findMostFrequentNodeValue(root) {
  const hash = new Map();

  function helper(node) {
    if (!node) {
      return null;
    }

    if (hash.has(node.value)) {
      const hashValue = hash.get(node.value);

      hash.set(node.value, hashValue + 1);
    }

    if (!hash.has(node.value)) {
      hash.set(node.value, 1);
    }

    if (node.left) {
      helper(node.left);
    }

    if (node.right) {
      helper(node.right);
    }
  }

  helper(root);

  let frequency = -Infinity;
  let mostFrequent = null;

  for (let [key, value] of hash) {
    if (value > frequency) {
      frequency = value;
      mostFrequent = key;
    }
  }

  return mostFrequent;
}

console.log(findMostFrequentNodeValue(rootTree));
