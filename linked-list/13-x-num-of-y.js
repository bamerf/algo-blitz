function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

// Create a new linked list
const linkedList = new LinkedList();

function toString(head) {
  let theString = '';
  while (head) {
    theString += head.value + '->';
    head = head.next;
  }
  return theString + 'None';
}

// linkedList.add(null);
// linkedList.add(2);
// linkedList.add(3);
// linkedList.add(4);

/*
'''
❓ PROMPT
Given integers *X* and *Y*, return the head of a linked list with *X* nodes with value *Y*.

Example(s)
createLL(5, 3)
"3 -> 3 -> 3 -> 3 -> 3"

createLL(6, 6)
"6 -> 6 -> 6 -> 6 -> 6 -> 6"

createLL(2, -10)
"-10 -> -10"
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #:

loop for target num of times
set value to target value
 

🛠️ IMPLEMENT
function createLL(count, value) {
def createLL(count: int, val: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

1, null
*/

function createLL(count, value) {
  let head = null;
  for (let i = 0; i < count; i++) {
    const newNode = new Node(value);

    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  return head;
}

console.log(toString(createLL(5, 2)));
console.log(toString(createLL(0, 1000)) === '<empty>');
console.log(toString(createLL(1, 999))); // "999"
console.log(toString(createLL(2, 88))); // 88 -> 88
console.log(toString(createLL(3, 4)) === '4 -> 4 -> 4');
console.log(toString(createLL(5, 3)) === '3 -> 3 -> 3 -> 3 -> 3');
console.log(toString(createLL(6, 6)) === '6 -> 6 -> 6 -> 6 -> 6 -> 6');
console.log(toString(createLL(2, -10))); // -10 -> -10
console.log(toString(createLL(3, 0))); // 0 -> 0 -> 0
