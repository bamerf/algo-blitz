/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

({[]})
^

'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #:

stack = [(, {, [ ];
map = {};

iterate through the string
if symbol is key of map
  push to stack

if symbol is value in map
  pop stack and compare to symbol
  if not equal
    return false

return true

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function validParanthesis(string) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];

    if (map[symbol]) {
      stack.push(symbol);
    } else {
      const last = stack.pop();

      if (symbol !== map[last]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParanthesis('({[]})'));
console.log(validParanthesis('({[})'));
console.log(validParanthesis('(){}{}[]'));
