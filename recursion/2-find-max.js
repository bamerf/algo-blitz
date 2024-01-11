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

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

1, 2, 3, 4 -> 4
2, 500, 2 -> 500
-1, -10, -100 -> -1
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)

iterate through the list and assign value to max variable if bigger than current max
 

📆 PLAN
Outline of algorithm #: 

return if current is null
check if current value is bigger than max
if yes assign current to temp max
recursive call, move to next node, pass temp max
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Create a new linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.add(-1);
linkedList.add(-100);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(5);

// return if current is null
// check if current value is bigger than max
// if yes assign current to temp max
// recursive call, move to next node, pass temp max

function findMax(ll, max = -Infinity) {
  const current = ll;

  if (!current) {
    return max;
  }

  if (current.value > max) {
    max = current.value;
  }

  return findMax(current.next, max);
}

console.log(findMax(linkedList.head));
