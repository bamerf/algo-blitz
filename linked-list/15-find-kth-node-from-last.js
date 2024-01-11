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

Pair Learning Find Kth Element from the end of a Linked List in One Pass

Discoveries / Assumptions
1, 2, 3, 4, 5
target = 1
output = 5
 - We need to do it in one pass
 - Might be possible to solve with recursion
 - Need to find out what the base case should be
 - Each node has value
 - How to deal with empty list, single node list
 - K > length ??

Test Cases
 - [] -> null
 - [n] -> n.value
 - Long List

Brainstorm / Plan

Algo #1
Recursion

- recurse to the end of the list
  - on the way back, decrementing target
  - once we reach 0 return value

Time O(n)
Space O(n)

Algo #2
initialize empty array
initialize pointer node to head of list

loop through list with our pointer
  at each element push its value to our array

return access array at length - k

Time O(n)
Space O(n)

Implement

Verify

[A, B, C]
 ^

 solution(A, 2, 1)
 solution(B, 2, 2) => should return this
 solution(C, 2, 3)
 solution(null, 2, 4)

 if (target == length)
 if (target == length)
 if ()
*/

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

function solution(head, target) {
  let result = null;
  let length = null;
  function helper(head, index = 0) {
    if (!head) {
      length = index;
      return null;
    }

    helper(head.next, index + 1);

    console.log('if ()', index, length);
    if (length - index === target) {
      result = head;
    } // or head.value
  }

  helper(head);

  return result;
}

console.log(solution(linkedList.head, 0));
