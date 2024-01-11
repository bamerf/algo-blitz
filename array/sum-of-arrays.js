/*
'''
❓ PROMPT
Given two arrays of equal length, return an array summing them together with the second array being traversed in reverse.

Example(s)
array1 = [1, 2, 3]
array2 = [4, 6, 10]
result = [11, 8, 7]

Explanation: *array1* is being traversed from left to right and *array2* is traversed right to left, so 1+10 = 11, 2+6 = 8, and 3+4 = 7.

array1 = [1, 5, 10, 12]
array2 = [2, 4, 3, 5]
result = [6, 8, 14, 14]

Explanation: 1+5 = 6, 5+3 = 8, 10+4 = 14, and 12+2 = 14.
 

🔎 EXPLORE
List your assumptions & discoveries:

array of same length
order of results array follows first array
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

declare a results array
iterate array1 from left to right
use the index from array1 to find the reverse index in array2
sum items and push to results array
 

🛠️ IMPLEMENT
function sumInReverse(arr1, arr2) {
def sumInReverse(arr1: list[int], arr2: list[int]) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function sumInReverse(arr1, arr2) {
  const results = [];

  arr1.forEach((item, index) => {
    results.push(item + arr2[arr2.length - 1 - index]);
  });

  return results;
}

console.log(JSON.stringify(sumInReverse([], [])) === '[]');
console.log(JSON.stringify(sumInReverse([5], [7])) === '[12]');
console.log(
  JSON.stringify(sumInReverse([1, 2, 3], [10, 20, 30])) === '[31,22,13]'
);
console.log(
  JSON.stringify(sumInReverse([1, 2, 3, 4], [40, 30, 20, 10])) ===
    '[11,22,33,44]'
);
