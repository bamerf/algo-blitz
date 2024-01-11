// - step 0: slow and fast ptrs start at first element
// - step 1: increment fast k times to get to the kth element
// - step 2: move both fast and slow pointers until fast pointer is at the end of the linked list
// - observe that slow pointer is at the kth last element

// - now that we know the kth element and kth last element, perform the swap
// - return the head of the linked list

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function swapNodes(head, k) {
  let slow = head;
  let fast = head;
  let kthNode = null;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  kthNode = fast;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  console.log(slow);
  console.log(fast);

  const temp = slow.val;
  slow.val = kthNode.val;
  kthNode.val = temp;

  return head;
}

function arrayToLinkedList(arr) {
  let dummyNode = new Node(0);
  let lastNode = dummyNode;
  arr.forEach((val) => {
    lastNode.next = new Node(val);
    lastNode = lastNode.next;
  });
  return dummyNode.next;
}

function printList(head) {
  let node = head;
  while (node !== null) {
    console.log(node.val);
    node = node.next;
  }
}

let head = arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
head = swapNodes(head, 4);

printList(head);
