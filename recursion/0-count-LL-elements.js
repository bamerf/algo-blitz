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
1 -> 1

 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)

iterate through the ll every time moving to the next node and adding to count
 

📆 PLAN
Outline of algorithm #: 

return if node is null
assign head to variable
have count arg as 0
recursive call, add count, move to next node
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Create a new linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

// return if node is null
// assign head to variable
// have count arg as 0
// recursive call, add count, move to next node

function countElements(head, count = 0) {
  const current = head;

  if (!current) {
    return count;
  }

  return countElements(current.next, count + 1);
}

console.log(countElements(linkedList.head));
