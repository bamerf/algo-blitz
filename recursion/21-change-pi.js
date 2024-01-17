/*
'''
❓ PROMPT
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

Example(s)
changePi("xpix") == "x3.14x"
changePi("pipi") == "3.143.14"
changePi("pip") == "3.14p"

is current letter p and next letter i
  new string is new string + 3.14
  recurse and index + 2
recurse index + 1
 

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
function changePi(word) {
def changePi(word: str) -> str:

is current letter p and next letter i
  new string is new string + 3.14
  recurse and index + 2
recurse index + 1
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function changePi(word, index = 0, newString = '') {
  if (index === word.length) {
    return newString;
  }

  let moveCount = 1;

  if (word[index] === 'p' && word[index + 1] === 'i') {
    newString = newString + '3.14';
    moveCount = 2;
  } else {
    newString = newString + word[index];
  }

  return changePi(word, index + moveCount, newString);
}

console.log(changePi('xpix') == 'x3.14x');
console.log(changePi('pipi') == '3.143.14');
console.log(changePi('pip') == '3.14p');
console.log(changePi('pi') == '3.14');
console.log(changePi('hip') == 'hip');
console.log(changePi('p') == 'p');
console.log(changePi('x') == 'x');
console.log(changePi('') == '');
console.log(changePi('pixx') == '3.14xx');
console.log(changePi('xyzzy') == 'xyzzy');
