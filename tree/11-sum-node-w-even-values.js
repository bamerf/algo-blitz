/*
'''
❓ PROMPT
Given a binary tree, return the sum of all nodes with an even-valued parent node.

Example(s)
           6
       7       8
    2    7   1   3
result = 19 (7 + 8 + 1 + 3)

           2
       5       9
result = 14 (5 + 9)

           2
    null     null
result = 0

- if value is even, sum the value of left and right nodes
 

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
function sumNodesWithEvenParent(root) {
def sumNodesWithEvenParent(root: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

           6
       7       8
    2    7   1   3
result = 19 (7 + 8 + 1 + 3)
*/

const rootTree = {
  value: 6,
  left: {
    value: 7,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 8,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
};

function sumNodesWithEvenParent(root) {
  let sum = 0;

  function helper(node) {
    if (!node) {
      return null;
    }

    if (node.value % 2 === 0) {
      if (node.left && node.left.value) {
        console.log(node.left.value);
        sum += node.left.value;
      }

      if (node.right && node.right.value) {
        console.log(node.right.value);
        sum += node.right.value;
      }
    }

    if (node.left) {
      helper(node.left);
    }

    if (node.right) {
      helper(node.right);
    }
  }

  helper(root);

  return sum;
}

console.log(sumNodesWithEvenParent(rootTree));
