/*
'''
❓ PROMPT
Given a string, recursively compute a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

Example(s)
pairStars("hello") == "hel*lo"
pairStars("xxyy") == "x*xy*y"
pairStars("aaaa") == "a*a*a*a"
 

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
 

🛠️ IMPLEMENT
function pairStars(word) {
def pairStars(word: str) -> str:

if at the end of the string
  return newString

if current letter and next letter are equal
  new string is new string + letter + *
new string = new string + letter

recurse and increment index
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function pairStars(word, index = 0, newString = '') {
  if (index === word.length) {
    return newString;
  }

  if (word[index] === word[index + 1]) {
    newString = newString + word[index] + '*';
  } else {
    newString = newString + word[index];
  }

  return pairStars(word, index + 1, newString);
}

function pairStars(word) {
  if (word.length <= 1) return word;

  if (word[0] === word[1]) return word[0] + '*' + pairStars(word.slice(1));

  return word[0] + pairStars(word.slice(1));
}

console.log(pairStars('hello') === 'hel*lo');
console.log(pairStars('xxyy') === 'x*xy*y');
console.log(pairStars('aaaa') === 'a*a*a*a');
console.log(pairStars('aaab') === 'a*a*ab');
console.log(pairStars('aa') === 'a*a');
console.log(pairStars('a') === 'a');
console.log(pairStars('') === '');
console.log(pairStars('noadjacent') === 'noadjacent');
console.log(pairStars('abba') === 'ab*ba');
console.log(pairStars('abbba') === 'ab*b*ba');
