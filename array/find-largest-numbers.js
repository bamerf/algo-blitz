/*
'''
❓ PROMPT
Given an array of numbers, return an array of the three largest values. 

Example(s)
findThreeLargest([1, 2, 3, 4])
findThreeLargest([1, 2, 3])
findThreeLargest([1, 2, 3, 27, 4, 5, 35, 6])

 

🔎 EXPLORE
List your assumptions & discoveries:

positive numbers


Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)2
Space: O(1)
 

📆 PLAN
Outline of algorithm #:

declare results array
iterate through each number
for each number iterate through the array again
check if number is bigger than the next item
push it to results array
 

🛠️ IMPLEMENT
function findThreeLargest(nums) {
def find_three_largest(nums):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findThreeLargest(nums) {
  if (nums.length <= 3) {
    return nums;
  }

  const results = [];
  let upperBound = Number.MAX_VALUE;

  for (let i = 0; i < 3; i++) {
    let largest = Number.MIN_VALUE;
    for (const val of nums) {
      if (val > largest && val < upperBound) {
        largest = val;
      }
    }

    results.push(largest);
    upperBound = largest;
  }

  return results;
}

console.log(findThreeLargest([]));
console.log(findThreeLargest([1]));
console.log(findThreeLargest([1, 2]));
console.log(findThreeLargest([1, 2, 3]));
console.log(findThreeLargest([1, 2, 3, 8, 4, 5, 3, 90, 10]));
console.log(findThreeLargest([1, 2, 3, 27, 4, 5, 35, 6]));
