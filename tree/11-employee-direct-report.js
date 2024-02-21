/*
'''
❓ PROMPT
Given an org chart of a company, employee A, and employee B: figure out if employee B is a direct report to employee A.

Employee B must report directly to employee A - this occurs if Employee A is the parent node of Employee B.

Employees in our tree are represented as integer values (eg: 1).

Return true if employee A manages employee B, false if not.

Example(s)
      1  <---- ceo
   2   3
      4  5
     6  
isDirectReport(ceo, 1, 2) == True
isDirectReport(ceo, 1, 4) == False
isDirectReport(ceo, 2, 1) == False
isDirectReport(ceo, 2, 3) == False
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function isDirectReport(person, manager, employee) {
def isDirectReport(person: Node, manager: int, employee: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

- for each node check if B is the child of A
*/

const rootTree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: {
    value: 3,
    left: {
      value: 4,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

function isDirectReport(person, manager, employee) {
  if (!person) {
    return null;
  }

  if (person.value === manager) {
    if (person.left.value === employee || person.right.value === employee) {
      return true;
    }
  }

  isDirectReport(person.left, manager, employee);
  isDirectReport(person.right, manager, employee);

  return false;
}

console.log(isDirectReport(rootTree, 1, 5));
