/*
'''
Remove K-Appearing Nodes from Unsorted List

Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.

Return the head node of the new linked list, after deleting/removing the nodes.

If a node appears more than once in a list, only the nodes that are `kth` or higher must be deleted. You can still retain the nodes leading up to the `kth` occurrence.

- forward node
- trail node
- iterate through the ll until node next is null
- check if element in hash/map
- if doesn't exist add 1
- if exists increment
- check if element in hash equals k
- if equals trail node's next equals forward node's next
- move trail node and forward node
- return ll
 

EXAMPLE(S)
4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

1 -> 1 -> 2, k = 2 should return 1 -> 2

1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3
 

FUNCTION SIGNATURE
def removeKAppearingNodes(head, k)
'''
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (data) {
  const newNode = new Node(data);
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
// linkedList.add(1);
// linkedList.add(5);

/*
- forward node
- trail node
- iterate through the ll until node next is null
- check if element in hash/map
- if doesn't exist add 1
- if exists increment
- check if element in hash equals k
- if equals trail node's next equals forward node's next
- move trail node and forward node
- return ll

  4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

  1 -> 1 -> 2, k = 2 should return 1 -> 2

  1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3
*/

function removeKth(linkedList, k) {
  const hash = {};
  let current = linkedList.head;
  hash[current.data] = 1;

  while (current) {
    if (current.next && !hash[current.next.data]) {
      hash[current.next.data] = 1;
      current = current.next;
    }
    if (current.next && hash[current.next.data] + 1 === k) {
      console.log(hash[current.next.data]);
      hash[current.next.data] += 1;
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return linkedList;
}

console.log(removeKth(linkedList, 2));
