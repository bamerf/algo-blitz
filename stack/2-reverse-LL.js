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

linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

function reverseLL(head) {
  const stack = [];
  let curr = head;

  while (curr) {
    stack.push(curr);

    curr = curr.next;
  }

  // new list
  const newHead = stack.pop();

  // curr2 is the pointer for the new list
  let curr2 = newHead;

  while (stack.length > 0) {
    curr2.next = stack.pop();
    curr2 = curr2.next;
  }

  curr2.next = null; //to avoid cycle

  return newHead;
}

console.log(reverseLL(linkedList.head));
