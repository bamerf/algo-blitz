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
Delete Even Nodes In Linked List

We've been given a linked list of integer values from 0 - 2^32, and we want to delete all of the nodes that are *even* and return the list's head.

We should return the modified input linked list as our result.
 

EXAMPLE(S)
[3,1,3] => [3, 1, 3]
[5, 6, 9] => [5, 9]
[2, 1, 3] => [1, 3]
[2, 2, 2] => []
[2, 7, 4, 3, 5] => [7, 3, 5]

1 -> 2 -> 3 -> None

create falseHead
initialize current to falseHead

while there's current
  if next value is even
    current.next = current.next.next
  current = current.next

return falseHead.next
 

FUNCTION SIGNATURE
function deleteEvenNodes(head) {
'''
*/

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(8);

function deleteEvenNodes(head) {
  if (!head) {
    return null;
  }

  const falseHead = new Node(0, head);
  let current = falseHead;

  while (current.next) {
    if (current.next.value % 2 === 0) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return falseHead.next;
}

console.log(deleteEvenNodes(linkedList.head));
