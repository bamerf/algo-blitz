/*
'''
❓ PROMPT
Given an array and a target value X, return an array of all indices containing value X.

Example(s)
indicesOfTarget([30,30,30], 30) == [0,1,2]
indicesOfTarget([3, 2, 5, 5, 1], 5) == [2,3]
 

🔎 EXPLORE
List your assumptions & discoveries:

all integers
empty array
no match
multiple match
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #:

declare new array
iterate through the array
check if matches K
push K index to new array
 

🛠️ IMPLEMENT
function indicesOfTarget(arr, target) {
def indicesOfTarget(arr: list[int], target: int) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function indicesOfTarget(arr, target) {
  const array = [];
  arr.forEach((item, index) => {
    if (item === target) {
      array.push(index);
    }
  });
  return array;
}

console.log(JSON.stringify(indicesOfTarget([], 1)) === '[]');
console.log(JSON.stringify(indicesOfTarget([5], 5)) === '[0]');
console.log(JSON.stringify(indicesOfTarget([5], 1)) === '[]');
console.log(JSON.stringify(indicesOfTarget([1], 1)) === '[0]');
console.log(JSON.stringify(indicesOfTarget([10, 20, 30], 1)) === '[]');
console.log(JSON.stringify(indicesOfTarget([10, 20, 30], 20)) === '[1]');
console.log(JSON.stringify(indicesOfTarget([30, 30, 30], 30)) === '[0,1,2]');
console.log(JSON.stringify(indicesOfTarget([3, 2, 5, 5, 1], 5)) === '[2,3]');
