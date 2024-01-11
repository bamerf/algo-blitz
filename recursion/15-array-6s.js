/*
'''
❓ PROMPT
Given an array of ints, compute recursively the number of times that the value 6 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Example(s)
array6([1, 2, 6], 0) == 1
array6([6, 6], 0) == 2
array6([1, 2, 3, 4], 0) == 0
 

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
function array6(nums, index) {
def array6(nums: list[int], index: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function array6(nums, index = 0, count = 0) {
  if (index === nums.length) {
    return count;
  }

  if (nums[index] === 6) {
    count++;
  }

  return array6(nums, index + 1, count);
}

console.log(array6([1, 2, 6], 0) == 1);
console.log(array6([6, 6], 0) == 2);
console.log(array6([1, 2, 3, 4], 0) == 0);
console.log(array6([1, 6, 3, 6, 6], 0) == 3);
console.log(array6([6], 0) == 1);
console.log(array6([1], 0) == 0);
console.log(array6([], 0) == 0);
console.log(array6([6, 2, 3, 4, 6, 5], 0) == 2);
console.log(array6([6, 5, 6], 0) == 2);
