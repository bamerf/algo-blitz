function toString(head) {
  let theString = '';
  while (head) {
    theString += head.value + '->';
    head = head.next;
  }
  return theString + 'None';
}

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

// Add nodes to the linked list
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
- no head
  return false
- if head.value equals target
  return true
- call, move forward
*/

function search(head, target) {
  if (!head) {
    return false;
  }

  if (head.value == target) {
    return true;
  }

  return search(head.next, target);
}

let LL1 = new Node(
  1,
  new Node(2, new Node(3, new Node(5, new Node(6, new Node(7, new Node(10))))))
);
console.log(search(null, 1)); // false
console.log(search(LL1, 2)); // true
console.log(search(LL1, 4)); // false
console.log(search(LL1, -1)); // false
console.log(search(LL1, 10)); // true
console.log(search(LL1, 11)); // false
