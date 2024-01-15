/*
'''
❓ PROMPT
Given a string, insert a star (*) between each character.

Example(s)
addStars("hello") == "h*e*l*l*o"
addStars("abc") == "a*b*c"
addStars("ab") == "a*b"
 

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

if at the end of string return new string
index = 0

for each recursive call
  new string is string[index] + *
  recurse and increment index
 

🛠️ IMPLEMENT
function addStars(word) {
def addStars(word: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function addStars(word, index = 0, newString = '') {
  if (index === word.length) {
    return newString;
  }

  newString =
    index === word.length - 1
      ? newString + word[index]
      : newString + `${word[index]}*`;

  return addStars(word, index + 1, newString);
}

console.log(addStars('hello') == 'h*e*l*l*o');
console.log(addStars('abc') == 'a*b*c');
console.log(addStars('ab') == 'a*b');
console.log(addStars('a') == 'a');
console.log(addStars('') == '');
console.log(addStars('3.14') == '3*.*1*4');
console.log(addStars('Chocolate') == 'C*h*o*c*o*l*a*t*e');
console.log(addStars('1234') == '1*2*3*4');
