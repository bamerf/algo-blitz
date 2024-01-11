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

// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);
// linkedList.add(4);

/*
'''
Delete K Nodes After Middle In Linked List

Given a linked list, delete K nodes after the middle.

If N is the length of the list, the middle node is [N / 2] using zero-based indexing.

Return the head of the modified list.

1. Explore -> Asking questions
2. Brainstorm -> High level plan + time & space complexity
3. Plan -> sudo code
4. Implement
5. Verify

 2 -> 9 -> 4 -> 1 -> 7, k = 2
                     s         
           p
 middle/slow = 4

 counter = 0;
 pervious=new Node();

 if (counter === k) {
  previous.next = slow.next;
 }
 slow = slow.next;
 counter++;


EXAMPLE(S)
1 -> 2 -> 3 -> 4, k = 2 should return 1 -> 2

1 -> 2 -> 3 -> 4, k = 1 should return 1 -> 2 -> 4

1, k = 0 should return 1

2 -> 9 -> 4 -> 1 -> 7, k = 99 should return 2 -> 9 -> 4

2 -> 9 -> 4 -> 1 -> 7, k = 1 should return 2 -> 9 -> 4 -> 7
 

FUNCTION SIGNATURE
function removeKAfterMiddle(head, k)
'''
*/

function removeKfromMiddle(head, k) {
  let fast = head;
  let slow = head;
  let counter = 0;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let current = slow;

  while (slow) {
    if (counter === k) {
      current.next = slow.next;
      return head;
    }

    slow = slow.next;
    counter++;
  }

  current.next = null;
  return head;
}

// Add nodes to the linked list
linkedList.add(2);
linkedList.add(9);
linkedList.add(4);
linkedList.add(6);
linkedList.add(1);
linkedList.add(7);

//   2 -> 9 -> 4 -> 1 -> 7, k = 2 === 2 -> 9 -> 4
// console.log(toString(removeKfromMiddle(linkedList.head, 2)))

//   2 -> 9 -> 4 -> 1 -> 7, k = 2 === 2 -> 9 -> 4 -> 6
console.log(toString(removeKfromMiddle(linkedList.head, 99)));
