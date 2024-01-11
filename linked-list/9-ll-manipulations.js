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
1. function swapValuePairs(head) - swap the data in each node without swapping pointers

1, 2, 3, 4, 5
            h
2, 1, 4, 3, 5

*/

function swapValuePairs(head) {
  // if no next or node is null
  // return list
  // current value swap next value
  // move next twice

  const current = head;

  if (!current || current.next === null) {
    return head;
  }

  const temp = current.value;
  current.value = current.next.value;
  current.next.value = temp;

  swapValuePairs(current.next.next);

  return head;
}

// console.log(toString(swapValuePairs(linkedList.head)));

/*

2. function additionNext(head) - add to the value in each node by the value in the next node. The tail node has no next node so double its value

*/

// 1, 2, 3, 4, 5
// 3, 5, 7, 9, 10

function additionNext(head) {
  const current = head;

  if (!head) {
    return head;
  }

  if (head.next === null) {
    current.value *= 2;

    return head;
  }

  current.value = current.value + current.next.value;

  additionNext(head.next);

  return head;
}

// console.log(toString(additionNext(linkedList.head)));

/*

 3. function firstRemoveEveryOther(head) - remove every other node starting with removing the head.

   1, 2, 3, 4 ,5
         h
  s

  sen = 2->4->null

  no head return sentinel
  sentinel points to head next
  head moves forward twice


*/

// function firstRemoveEveryOther(head, sentinel = new Node()) {
//   console.log(toString(head));
//   console.log(toString(sentinel));
//   if (!head) {
//     return sentinel.next;
//   }

//   if(head.next) {
//     sentinel.next = new Node(head.next.value, head.next.next)
//     return firstRemoveEveryOther(head.next.next, sentinel.next);
//   } else {
//     return sentinel.next
//   }

// }

// console.log(toString(firstRemoveEveryOther(linkedList.head)));

/*

 4. function rotateValuesRight(head) - move the values right without altering next pointers. The tail's value should become the head's new value.

  1, 2, 3, 4, 5, none -> 5, 1, 2, 3, 4, none
           c
s

if no next.next
  point current to next.next
  return last value & next

when we have last

sentinel becomes last
sentinel next points to head
 */

function rotateValuesRight(head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  if (!head.next.next.next) {
    // We've reached the second to last node in the list.
    const lastValue = head.next.next.value; // Store the value of the last node.
    head.next.next = null; // Remove the last node from the list.
    console.log(lastValue);
    return lastValue; // Return the value of the last node.
  }

  const lastValue = rotateValuesRight(head.next);

  return new Node(lastValue, head);
}

console.log(toString(rotateValuesRight(linkedList.head)));

/*

 5. function removeLastQuarterNodes(head) - remove the last 1/4 of the nodes in the linked list. How can this be solved without a length variable?

*/
