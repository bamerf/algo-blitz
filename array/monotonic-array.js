/*
'''
❓ PROMPT
Today, you will be determining if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

Source: https://leetcode.com/problems/monotonic-array/

Example(s)
[1] => true
[1, 2] => true
[2, 1] => true
[2, 1, 3] => false
[5, 4, 3] => true
 

🔎 EXPLORE
List your assumptions & discoveries:

integers
some monotonic and some not
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(1)
 

📆 PLAN
Outline of algorithm #:

iterate through the array
check if the item +1 or -1 is equal to the next item
 

🛠️ IMPLEMENT
function isMonotonic(nums) {
def isMonotonic(nums: list[int]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isMonotonic(nums) {
  if (nums.length === 0) {
    return true;
  }

  let isMonotonic;
  let isGrowing = nums[0] + 1 === nums[1];

  nums.forEach((item, index) => {
    if (isGrowing) {
      if (index === nums.length - 1) {
        isMonotonic = nums[nums.length - 1] - 1 === nums[nums.length - 2];
      } else {
        isMonotonic = item + 1 === nums[index + 1];
      }
    }

    if (!isGrowing) {
      if (index === nums.length - 1) {
        isMonotonic = nums[nums.length - 1] + 1 === nums[nums.length - 2];
      } else {
        isMonotonic = item - 1 === nums[index + 1];
      }
    }
  });

  return isMonotonic;
}

console.log(isMonotonic([]) === true);
console.log(isMonotonic([5]) === true);
console.log(isMonotonic([5, 10]) === true);
console.log(isMonotonic([10, 5]) === true);
console.log(isMonotonic([1, 5, 5, 10]) === true);
console.log(isMonotonic([10, 5, 5, 1]) === true);
console.log(isMonotonic([10, 5, 5]) === true);
console.log(isMonotonic([5, 5, 10]) === true);
console.log(isMonotonic([4, 2, 8]) === false);
console.log(isMonotonic([8, 2, 4]) === false);
console.log(isMonotonic([8, 2, 4, 2]) === false);
console.log(isMonotonic([5, 5, 5]) === true);
