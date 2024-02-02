/*
'''
Find Least Occurring Node

Given a binary tree with node values represented as integers, find and return the least occurring tree node value (eg: 3).

You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).
 
EXAMPLE(S)
      1
  2       _
2   _   _   _
should return Node(1)

      1
  1       1
1   1   1   1
should return Node(1)

  9
_   _
should return Node(9)
 
/*
 - Engineering Method -
1. Explore - Thoroughly understand the problem
- we don't have to worry about null
- return the node not just the value

2. Brainstorm - Identify possible solution(s)


3. Choose and outline a solution
Use a stack (bsf) to iterate through the tree, record in a map the frequency of values. iterate through the map and return the lowest occuring node.

Time: O(n)
Space: O(n)

4. Build it 
5. Verify / Test it

findLeastOccurringNode(root)
  initialize a stack with the root
  initialize a map

  while stack is not empty
    pop the last node
    if last.value not in map, add it
    otherwise increment it
    
    if right node push to stack
    if left node push to stack

  initialize lowestCount
  initialize lowestValue

  for [key, value] of Map

  const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });



FUNCTION SIGNATURE
function findLeastOccurringNode(root) {
'''
*/

const findLeastOccurringNode = (root) => {
  const stack = [root];
  const frequencyMap = new Map();

  while (stack.length > 0) {
    const last = stack.pop();
    if (frequencyMap.has(last.value)) {
      let number = frequencyMap.get(last.value);
      frequencyMap.set(last.value, ++number);
    } else {
      frequencyMap.set(last.value, 1);
    }

    if (last.right) stack.push(last.right);
    if (last.left) stack.push(last.left);
  }

  let lowestCount = Infinity;
  let lowestValue = root.value;

  for (const [node, count] of frequencyMap) {
    if (count < lowestCount) {
      lowestCount = count;
      lowestValue = node;
    }
  }

  return lowestValue;
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(4);
root.right = new TreeNode(4);
root.left = new TreeNode(4);
root.left.right = new TreeNode(4);

console.log(findLeastOccurringNode(root));
