/*
'''
❓ PROMPT
Flipping a tree means rotating it 180 degrees around its vertical axis. For example:
     1
   /   \
  2     3
 / \   / \
4  5  6   7

Becomes:
     1
   /   \
  3     2
 / \   / \
7  6  5   4

- BFS

queue = [3, 2]
node = 1
level = [1]
if (node.left && node.rigth) -> node.left = node.right and node.right = node.left


Example(s)
    5 <--- root
 10   5
flip(root)

root.val == 5
root.left.val == 5
root.right.val == 10

Verify that these are leaf nodes:
root.left.left == None
root.left.right == None
root.right.left == None
root.right.right == None
 

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
function flip(root) {
def flip(root: Node) -> None:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

     1
   /   \
  2     3
 / \   / \
4  5  6   7

Becomes:
     1
   /   \
  3     2
 / \   / \
7  6  5   4

- BFS

queue = [3, 2]
node = 1
level = [1]
if (node.left && node.rigth) -> node.left = node.right and node.right = node.left
*/

const rootTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
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
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

function flip(root) {
  if (!root) {
    return null;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node) {
        if (node.left && node.right) {
          const temp = node.left;
          node.left = node.right;
          node.right = temp;
        }

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  return root;
}

console.log(flip(rootTree));
