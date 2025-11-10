/*

Given a string s that may contain letters, digits, and the characters "(" and ")", remove the minimum possible number of parentheses so the resulting string is valid. A string is valid if every opening parenthesis has a corresponding closing parenthesis and parentheses are properly nested.
Return all distinct valid strings that can be produced. You can return the answers in any order.
Example(s)
Input: "()())()"
Output: ["()()()", "(())()"]

Input: ")(" 
Output: [""]

*/

function isValid(str) {
  let depth = 0;
  for (const ch of str) {
    if (ch === '(') depth++;
    else if (ch === ')') {
      depth--;
      if (depth < 0) return false; // too many ')'
    }
  }
  return depth === 0; // all '(' matched
}

function removeInvalidParentheses(s) {
  if (!s) return [''];
  const queue = [s];
  const seen = new Set([s]);
  const res = [];
  let found = false;

  while (queue.length) {
    const cur = queue.shift();
    if (isValid(cur)) {
      found = true;
      res.push(cur);
    }
    if (found) continue; // stop generating deeper when min removals reached

    for (let i = 0; i < cur.length; i++) {
      const ch = cur[i];
      if (ch !== '(' && ch !== ')') continue;
      const next = cur.slice(0, i) + cur.slice(i + 1);
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }
  return res.length ? res : [''];
}

module.exports = { removeInvalidParentheses };

const { removeInvalidParentheses } = require('./solution');

function equalLists(a, b) {
  return (
    a.length === b.length && [...a].sort().join(',') === [...b].sort().join(',')
  );
}

if (!equalLists(removeInvalidParentheses('()())()'), ['()()()', '(())()']))
  throw new Error('Test 1 failed');
if (!equalLists(removeInvalidParentheses('(a)())()'), ['(a)()()', '(a())()']))
  throw new Error('Test 2 failed');
if (!equalLists(removeInvalidParentheses(')('), ['']))
  throw new Error('Test 3 failed');
console.log('All JS tests passed!');
