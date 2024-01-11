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
linkedList.add(1);
linkedList.add(1);
linkedList.add(1);
linkedList.add(1);

function sum(head) {
  if (!head) {
    return 0;
  }

  return head.value + sum(head.next);
}

console.log(sum(linkedList.head));
