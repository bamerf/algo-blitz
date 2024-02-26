/*
'''
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively the size of the largest substring which starts and ends with the given *sub* string and return its length, including the length of the substrings. When *sub* is multiple characters, they may overlap with each other and share characters.

Example(s)
strDist("catcowcat", "cat") == 9
strDist("catcowcat", "cow") == 3
strDist("cccatcowcatxx", "cat") == 9
strDist("ooowhwhwooo", "whw") == 5


string = cat
count = 0
isCompleteWord = false

head
pointerTwo

while head <= tail

if string[0] === current -> count++ & head++
if string[last] === current -> count++ & tail--

catcowcat
 ^     ^
 

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
function strDist(word, sub) {
def strDist(word: str,  sub: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

strDist("catcowcat", "cat") == 9
strDist("catcowcat", "cow") == 3
strDist("cccatcowcatxx", "cat") == 9
strDist("ooowhwhwooo", "whw") == 5


string = cat
count = 0
doCount = true

if current === split[count] -> count++

split = [c, a, t]
            ^

cat
catcowcat
^
*/

// solve with recursion
function strDist(word, sub) {
  let start = word.indexOf(sub);
  let end = word.lastIndexOf(sub) + sub.length;
  return end - start;
}

console.log(strDist('catcowcat', 'cat') == 9);
console.log(strDist('catcowcat', 'cow') == 3);
console.log(strDist('cccatcowcatxx', 'cat') == 9);
console.log(strDist('ooowhwhwooo', 'whw') == 5);
