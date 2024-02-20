/*
'''
❓ PROMPT
Given a binary tree, find all nodes that have only one child. Return an array of node values representing each single-child parent in any order.

Example(s)
           1
       2       3
     _   4   _   _
    
should return [2]

           12
       3       4
    1    _   6   _
    
should return [3, 4]

           12
       3       4
    1    _   6   _
  9  _      _ _
    
should return [3, 1, 4]
 

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
function hasSingleChildren(root) {
def hasSingleChildren(root: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

- initialize an array
- go through the tree
- check if not node has both children or no children
  - add node value to array
- return array
*/

/*
        1
    2      3
         4     5
      8      6
 */

const rootTree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
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

function hasSingleChildren(root) {
  const result = [];

  function helper(node) {
    if (!node) {
      return null;
    }

    if ((node.left && !node.right) || (node.right && !node.left)) {
      result.push(node.value);
    }

    helper(node.left);
    helper(node.right);
  }

  helper(root);

  return result;
}

console.log(hasSingleChildren(rootTree));
