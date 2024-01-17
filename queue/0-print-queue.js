/*
'''
❓ PROMPT
You are asked to design a simple printer queue.

The printer can only perform one operation at a time and processes the print jobs in the order they are added to the queue. The actions parameter is a list of tuples, where each tuple contains one of the following commands:

("add", "document_name"): Add a new document to the print queue.
("print",): Print the next document in the queue.
("cancel", "document_name"): Cancel a document in the queue. If the document is not in the queue, do nothing.
The function should return a list of strings representing the names of the printed documents in the order they were printed.

result = printer_queue(actions)
print(result)  # Output: ['doc1', 'doc2', 'doc3']

<space />

Hint: What is the difference between a stack and a queue, and why do we use a queue in this question?

A: Queues follow First-In-First-Out (FIFO) principle, whereas Stacks are Last-In-First-Out (LIFO) principle. We use a queue in this particular problem because the documents added to the queue should be printed in the order it was added.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)

Example(s)
actions = [
    ("add", "doc1"),    # Add 'doc1' to the queue
    ("add", "doc2"),    # Add 'doc2' to the queue
    ("print",),         # Print 'doc1' from the queue to the printed queue
    ("cancel", "doc1"), # Remove 'doc1' from the queue (do nothing)
    ("add", "doc3"),    # Add 'doc3' to the queue
    ("print",),         # Print 'doc2' from the queue to the printed queue
    ("print",)          # Print 'doc3' from the queue to the printed queue
]

actions = add, print, cancel

add = prepend item to an array
print = log the last item in the array
cancel = if item being logged is last item, stop logging
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function printerQueue(actions) {) // returns list
def printer_queue(actions: list) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const actions = [
  ['add', 'doc1'],
  ['add', 'doc2'],
  'print',
  ['cancel', 'doc1'],
  ['add', 'doc3'],
  'print',
  'print',
];

function printerQueue(actions) {
  const queue = [];
  let printing = null;

  actions.forEach((action) => {
    if (action.length === 2 && action[0] === 'add') {
      console.log(`adding ${action[1]}`);
      queue.unshift(action[1]);
    }

    if (
      action.length === 2 &&
      action[0] === 'cancel' &&
      printing === action[1]
    ) {
      console.log(`canceling ${action[1]} `);
      queue.pop();
      printing = null;
    }

    if (action === 'print') {
      const lastItem = queue[queue.length - 1];
      printing = lastItem;
      console.log(`printing ${printing}`);
    }
  });

  console.log(queue);
}

printerQueue(actions);
