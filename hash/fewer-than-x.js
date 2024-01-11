/*
'''
❓ PROMPT
Given an array and a target count X, return true if there are less than X distinct values in the array. For example, given [1, 2, 2, 3, 3] and 4, return true because there are only 3 distinct values 1, 2, and 3.

Example(s)
[1, 2, 2, 3, 3], 3 => false (there are exactly 3 distinct values)
[1, 2, 2, 3, 4], 3 => false (there are 4 distinct values)
[1, 1, 2, 2, 2], 3 => true (there are exactly 2 distinct values)
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

- initialize a set
- iterate and push to set
- if set size less than target return true
 

🛠️ IMPLEMENT
function fewerThanTargetDistinct(arr, target) {
def fewerThanTargetDistinct(arr: list[int], target: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function fewerThanTargetDistinct(arr, target) {
  const set = new Set(arr);

  for (const item of arr) {
    set.add(item);
  }

  return set.size < target;
}

console.log(fewerThanTargetDistinct([1, 2, 2, 3, 3], 3) === false);
console.log(fewerThanTargetDistinct([1, 2, 2, 3, 4], 3) === false);
console.log(fewerThanTargetDistinct([1, 1, 2, 2, 2], 3) === true);
console.log(fewerThanTargetDistinct([9], 1) === false);
console.log(fewerThanTargetDistinct([9], 2) === true);
console.log(fewerThanTargetDistinct([8, 8, 8], 1) === false);
console.log(fewerThanTargetDistinct([8, 8, 8], 2) === true);
console.log(fewerThanTargetDistinct([8, 8, 8], 3) === true);
console.log(fewerThanTargetDistinct([6, 7, 8, 9], 1) === false);
console.log(fewerThanTargetDistinct([6, 7, 8, 9], 2) === false);
console.log(fewerThanTargetDistinct([6, 7, 8, 9], 3) === false);
console.log(fewerThanTargetDistinct([6, 7, 8, 9], 4) === false);
console.log(fewerThanTargetDistinct([6, 7, 8, 9], 5) === true);
