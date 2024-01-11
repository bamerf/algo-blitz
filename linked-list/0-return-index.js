/*
'''
❓ PROMPT
Given a linked list and a target value, return the index of the first occurrence of that value in the linked list. The index should be zero-indexed.

Example(s)
list1 = 1 -> 2 -> 3 -> 4 -> 5

firstIndexInLL(list1, 9) == -1
firstIndexInLL(list1, 3) == 2

counter = 0

no head
  return -1

is value equal k
  return counter

recursive call increment counter and move forward


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
function firstIndexInLL(node, target) {
def firstIndexInLL(node: Node, target: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

counter = 0

no head
  return -1

is value equal k
  return counter

recursive call increment counter and move forward
*/

function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function firstIndexInLL(head, target, counter = 0) {
  if (!head) {
    return -1;
  }

  if (head.value === target) {
    return counter;
  }

  return firstIndexInLL(head.next, target, counter + 1);
}

let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
let list2 = new Node(2);
let list3 = new Node(
  -1,
  new Node(-2, new Node(-3, new Node(-4, new Node(-5))))
);
let list4 = new Node(1, new Node(2, new Node(3, new Node(2, new Node(1)))));

console.log(firstIndexInLL(null, 12) === -1);
console.log(firstIndexInLL(list1, 9) === -1);
console.log(firstIndexInLL(list1, 3) === 2);
console.log(firstIndexInLL(list2, 2) === 0);
console.log(firstIndexInLL(list2, 1) === -1);
console.log(firstIndexInLL(list3, -2) === 1);
console.log(firstIndexInLL(list4, 2) === 1);
console.log(firstIndexInLL(list4, 1) === 0);
