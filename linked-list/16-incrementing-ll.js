/*
'''
Given a linked list with each node representing a digit in an integer, add 1 to the number. The head holds the most significant digit and tail holds the least significant digit. Here is some starting code to implement and print out a linked list in Python.

EXAMPLE(S)
head = 1 -> 2 -> 3 -> None
head = addOne(head)

Output: 1 -> 2 -> 4 -> None

head = 9 -> 9 -> 9 -> None
head = addOne(head)

Output: 1 -> 0 -> 0 -> 0 -> None
 

FUNCTION SIGNATURE


function addOne(head) {
'''
*/

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  toString() {
    let curr = this;
    let str = '';

    while (curr) {
      str += curr.val;
      curr = curr.next;
    }

    return str;
  }
}

function arrayToLinkedList(array) {
  let head = null;
  let currentNode = null;

  array.forEach((item) => {
    let nextNode = new ListNode(item);

    if (head === null) {
      head = nextNode;
      currentNode = nextNode;
    } else {
      currentNode.next = nextNode;
      currentNode = nextNode;
    }
  });

  return head;
}

// Approach

/*
EXAMPLE(S)
head = 1 -> 2 -> 3 -> None
head = addOne(head)

Output: 1 -> 2 -> 4 -> None

head = 9 -> 9 -> 9 -> None
head = addOne(head)

Output: 1 -> 0 -> 0 -> 0 -> None
 11
 999
+. 1
-----
1000


// Recursion

1. Base case (stop recursing)
2. Set up any variables (e.g x = ?, y = ?)
3. Recursive call (builds the stack)
4. Do any work with variables set up OR return a value from the previous stack position
    ( z = recursiveCall() )
5. Return statement when recursion is stopped
    (return x + y)

function recursiveCall() 
----------
x = ?
y = ?
----------
x = ?
y = ?
z = x + y was from the previous call in the stack
----------
x = ?
y = ?
-----------

9 -> 9 -> 9

1. base case = node is null - return 1
2. update node value - previous return value + current node value
   if the updated node value is 10, them update node value to 0 and return 1
   otherwise just update the node value, return 0
3. if there's no more recursive calls, and the return value is 1, then create a new node as the  head and make the old head head.next

*/

function addOne(head) {
  function helper(head) {
    if (!head) {
      return 1;
    }

    const value = head.val + helper(head.next);

    if (value >= 10) {
      head.val = 0;
      return 1;
    }

    head.val = head.val + 1;

    return 0;
  }

  const carry = helper(head);

  if (carry === 1) {
    const newNode = new ListNode(1);

    newNode.next = head;

    return newNode;
  }

  return head;
}

console.log(addOne(arrayToLinkedList([9, 9, 9])).toString(), '1000');
