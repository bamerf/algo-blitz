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
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(8);

/*
- function createCycle(head): point the tail to the head.

go to end
point end to head

1, 2, 3, 4, 5


*/

function createCycle(head) {
  let current = head;

  while (current.next) {
    current = current.next;
  }

  current.next = head;

  console.log(current);

  return head;
}

// console.log(createCycle(linkedList.head));

/*
- function multiplyNext(head): multiply the value in each node by the value in the next node. The tail node has no 
next node so multiply it by itself.

current value += next value
if last node multiply by itself

1, 2, 3, 4, 5

*/

function multiplyNext(head) {
  let current = head;
  while (current.next) {
    current.value *= current.next.value;

    current = current.next;
  }

  current.value *= current.value;

  return head;
}

// console.log(toString(multiplyNext(linkedList.head)))

/*
- function removeEveryOther(head): remove every other node, skipping the head. The first node to be removed should be after the head.

1, 2, 3, 4, 5, null
1, 3, 5, null
*/

function removeEveryOther(head) {
  let current = head;

  while (current.next) {
    current.next = current.next.next;
    current = current.next;
  }

  return head;
}

// console.log(toString(removeEveryOther(linkedList.head)))

/*
- function rotateValuesLeft(head): move the values left without altering next pointers. The head's value should become the tail's new value.

swap values instead of pointing

1, 2, 3, 4, 5, null
2, 3, 4, 5, 1, null
*/

function rotateValuesLeft(head) {
  let current = head;

  while (current.next) {
    [current.value, current.next.value] = [current.next.value, current.value];
    current = current.next;
  }

  return head;
}

// console.log(toString(rotateValuesLeft(linkedList.head)))

/*
- function findThirdQuarterNode(head): find the node 3/4ths length through the linked list. How can this be solved with 1 pass without a length variable?

1, 2, 3, 4, null -> 3

*/

function findThirdQuarterNode(head) {
  let counter = 0;
  let slow = head;
  let fast = head;

  while (fast.next) {
    fast = fast.next;
    counter += 0.75;

    if (counter > 1) {
      slow = slow.next;
      counter -= 1;
    }
  }

  return slow.value;
}

console.log(findThirdQuarterNode(linkedList.head));
