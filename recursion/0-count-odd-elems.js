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

/*
'''
❓ PROMPT
Given a linked list of positive integers, count the elements with odd values from the list. Note that 0 is an even number.

Example(s)
head = 1 -> 1 -> 1 -> 1
countOdd(head) == 4

head = 1 -> 2 -> 3 -> 4
countOdd(head) == 2
 

🔎 EXPLORE
List your assumptions & discoveries:

positive numbers
 

Insightful & revealing test cases:

1, 2, 1, 1 -> 3
2, 2, 2, 2 -> 0
1, 1, 1, 1 -> 4
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)

iterate and check if element is odd, then do the recursive call and move to the next element and add to count
 

📆 PLAN
Outline of algorithm #: 

return if head is null
assign head to current
check if value remainder is 1 usgin modulos
if yes add to count
recursive call, move to next node and pass count as arg
 

🛠️ IMPLEMENT
function countOdd(head) {
def countOdd(head: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Create a new linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

// return if head is null
// assign head to current
// check if value remainder is 1 usgin modulos
// if yes add to count
// recursive call, move to next node and pass count as arg

function countOdd(ll, count = 0) {
  const current = ll;
  let tempCount = count;

  if (!current) {
    return count;
  }

  if (current.value % 2 === 1) {
    tempCount++;
  }

  return countOdd(current.next, tempCount);
}

console.log(countOdd(linkedList.head));

console.log(countOdd(null) == 0);

// 0
let head = new Node(0);
console.log(countOdd(head) == 0);

// 5
head = new Node(5);
console.log(countOdd(head) == 1);

// 6
head = new Node(6);
console.log(countOdd(head) == 0);

// 1 -> 1 -> 1 -> 1
head = new Node(1, new Node(1, new Node(1, new Node(1))));
console.log(countOdd(head) == 4);

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(countOdd(head) == 2);

// 2 -> 2 -> 2 -> 2
head = new Node(2, new Node(2, new Node(2, new Node(2))));
console.log(countOdd(head) == 0);

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(countOdd(head) == 3);

// 6 -> 2 -> 100 -> 4 -> 8
head = new Node(6, new Node(2, new Node(100, new Node(4, new Node(8)))));
console.log(countOdd(head) == 0);
