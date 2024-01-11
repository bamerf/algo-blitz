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

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

1 -> 2 -> 3 -> 4
               ^

itearet until no node.next
append new node
return head
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

function appendElement(head, originalHead = head) {
  if (!head.next) {
    const newNode = new Node(head.value + 1);

    head.next = newNode;

    return originalHead;
  }

  return appendElement(head.next, originalHead);
}

console.log(appendElement(linkedList.head));
