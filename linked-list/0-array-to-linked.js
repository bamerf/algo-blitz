/*
'''
❓ PROMPT
Given an array containing numbers, convert this to a singly linked list and return the head of the list.

Example(s)
arrayToLL([1,2]) == "1 -> 2"
arrayToLL([1,2,3]) == "1 -> 2 -> 3"
 

🔎 EXPLORE
List your assumptions & discoveries:


Insightful & revealing test cases:

[] -> []

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 

create linked list
itreate thorugh the array
add array item to linked list
return linked list
 

🛠️ IMPLEMENT
function arrayToLL(array) {
def arrayToLL(array: list[int]) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function createNode(value, next = null) {
  return { value, next };
}

function createLinkedList() {
  return { head: null };
}

function addNode(linkedList, data) {
  const node = createNode(data);

  if (!linkedList.head) {
    linkedList.head = node;
  } else {
    let current = linkedList.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}

function arrayToLL(array) {
  const ll = createLinkedList();

  array.forEach((item) => addNode(ll, item));

  return ll;
}

function arrayToLL(array) {
  let sentinel = new createNode(0);

  let curr = sentinel; // current is dummy node
  for (let i = 0; i < array.length; i++) {
    curr.next = new createNode(array[i]); // next node is new node
    curr = curr.next; // current is next of new node
  }

  return sentinel.next;
}

console.log(arrayToLL([1, 2, 3]));
