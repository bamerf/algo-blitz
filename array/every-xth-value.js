/*
'''
❓ PROMPT
Given an array and a number *X*, return an array containing every *X*th number in the input array.

Example(s)
everyXth([1,2,3,4,5,6], 2) == [2,4,6]
everyXth([1,2,3,4,5,6], 3) == [3,6]
 

🔎 EXPLORE
List your assumptions & discoveries:

all integers
return an empty array if no match
 

Insightful & revealing test cases:

empty arg1
0 arg2
single match
multiple match
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #:

iterate through the array. use modulos to find matches. push matches to new array
or
use filter with modulos
 

🛠️ IMPLEMENT
function everyXth(arr, x) {
def everyXth(arr: list[int], x: int) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function everyXth(arr, x) {
  return arr.filter((item) => item % x === 0);
}

console.log(JSON.stringify(everyXth([], 1000)) === '[]');
console.log(JSON.stringify(everyXth([5], 1)) === '[5]');
console.log(JSON.stringify(everyXth([5], 2)) === '[]');
console.log(JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 2)) === '[2,4,6]');
console.log(JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 3)) === '[3,6]');
console.log(JSON.stringify(everyXth([1, 2, 3, 4, 10, 6], 5)) === '[10]');
console.log(JSON.stringify(everyXth([1, 2, 3, 4, 10, 6], 8)) === '[]');
