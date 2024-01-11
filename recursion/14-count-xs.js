/*
'''
❓ PROMPT
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

Example(s)
countX("xxhixx") == 4
countX("xhixhix") == 3
countX("hi") == 0
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 

- if at the end of the string
  - return count
- check if current letter is x
  - add to count
- recurse and increment index
 

🛠️ IMPLEMENT
function countX(word) {
def countX(word: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function countX(word, index = 0, count = 0) {
  if (index === word.length) {
    return count;
  }

  if (word[index] === 'x') {
    count++;
  }

  return countX(word, index + 1, count);
}

console.log(countX('xxhixx') === 4);
console.log(countX('xhixhix') === 3);
console.log(countX('hiX') === 0);
console.log(countX('XXXhXXX') === 0);
console.log(countX('x') === 1);
console.log(countX('') === 0);
console.log(countX('hihi') === 0);
console.log(countX('hiAAhi12hi') === 0);
