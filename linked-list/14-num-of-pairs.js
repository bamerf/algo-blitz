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

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

/*
'''
❓ PROMPT
Given a linked list, return the number of values that occur exactly twice. This is the linked list version of a problem you may have seen in the hash structures Subchallenge so might be familliar!

Example(s)
head = 1 -> 2 -> 2 -> 3 -> 3 -> 3
numPairs(head) == 1
 

🔎 EXPLORE
List your assumptions & discoveries:

no pairs -> 0
multiple pairs -> count
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 

have a pair count variable
check if current node and next node have same value
  add to counter
also check if current node and next next node value are not the same
return count
 

🛠️ IMPLEMENT
function numPairs(head) {
def numPairs(head: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// 5, 5 10, 10
//  5, 5, 10, 10, 10

// current = next & no next.next
// current = next.next

// current = next & current != next.next
// count
// current = next.next

// 1, 2, 2, 3, 3, 3

function numPairs(head) {
  let pairCount = 0;
  let current = head;
  const map = {};

  while (current) {
    if (!map[current.value]) {
      map[current.value] = 1;
    } else {
      map[current.value] += 1;
    }

    current = current.next;
  }

  for (const value in map) {
    if (map[value] === 2) {
      pairCount++;
    }
  }

  return pairCount;
}

let head1 = new Node(
  1,
  new Node(2, new Node(2, new Node(3, new Node(3, new Node(3)))))
);
let head2 = new Node(5, new Node(5, new Node(10, new Node(20))));
let head3 = new Node(5, new Node(5, new Node(10, new Node(10))));
let head4 = new Node(5, new Node(5, new Node(5, new Node(10))));
let head5 = new Node(5, new Node(10, new Node(10, new Node(10))));
let head6 = new Node(4);
let head7 = new Node(5, new Node(5));
let head8 = new Node(5, new Node(5, new Node(5, new Node(5))));
let head9 = new Node(6, new Node(9));
let head10 = new Node(5, new Node(5, new Node(5, new Node(10, new Node(10)))));
let head11 = new Node(
  6,
  new Node(5, new Node(5, new Node(5, new Node(5, new Node(6)))))
);

console.log(numPairs(null) == 0);
console.log(numPairs(head1) == 1);
console.log(numPairs(head2) == 1);
console.log(numPairs(head3) == 2);
console.log(numPairs(head4) == 0);
console.log(numPairs(head5) == 0);
console.log(numPairs(head6) == 0);
console.log(numPairs(head7) == 1);
console.log(numPairs(head8) == 0);
console.log(numPairs(head9) == 0);
console.log(numPairs(head10) == 1);
console.log(numPairs(head11) == 1);
