/*
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

result = "()()()()(()))"
stack = []

(()()) (()) (()(()))
^

*/

function removeOuterParentheses(string) {
  let result = '';
  const stack = [];

  for (let char of string) {
    if (char === '(') {
      if (stack.length !== 0) {
        result += char;
      }
      stack.push(char);
    }

    if (char === ')') {
      stack.pop();
      if (stack.length !== 0) {
        result += char;
      }
    }
  }

  return result;
}

console.log(removeOuterParentheses('(()())(())(()(()))'));
