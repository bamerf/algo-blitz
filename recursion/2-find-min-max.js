/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the minimum and maximum element in an array. You may use the *min(a,b)* and *max(a,b)* functions to shorthand picking the minimum and maximum between 2 values.

Example(s)
findMin([12, 1234, 45, 67, 1]) == 1
findMin([10, 20, 30]) == 10
findMin([8, 6, 7, 5, 3, 7]) == 3

findMax([12, 1234, 45, 67, 1]) == 1234
findMax([10, 20, 30]) == 30
findMax([8, 6, 7, 5, 3, 7]) == 8
 

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

return min/max if index equals end of array
check if item is less than min/max
  assign item to min/max
  recursive call incrementing index and passing new min/max

recursive call incrementing index passing old min/max

 

🛠️ IMPLEMENT
function findMin(arr) {
function findMax(arr) {
def findMin(arr: list[int]) -> int:
def findMax(arr: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findMin(arr) {
  function helper(arr, index = 0, min = Infinity) {
    if (arr[index] === undefined || index === arr.length) {
      return min;
    }

    if (arr[index] < min) {
      min = arr[index];
    }

    return helper(arr, index + 1, min);
  }

  return helper(arr);
}

// function findMin(arr) {
//   let result = arr.pop(); // 1
//   console.log(result);
//   if (arr.length > 0) {
//     let next = findMin(arr);
//     if (next < result) {
//       result = next;
//     }
//   }

//   // arr.length === 0
//   return result;
// }

console.log(findMin([12, 1234, 45, 67, 1]) === 1);
// console.log(findMin([10, 20, 30]) === 10);
// console.log(findMin([30, 20, 10]) === 10);
// console.log(findMin([20, 10, 30]) === 10);
// console.log(findMin([10, 20, 30, 10]) === 10);
// console.log(findMin([10, 10, 10, 10]) === 10);
// console.log(findMin([6]) === 6);
// console.log(findMin([8, 6, 7, 5, 3, 7]) === 3);
// console.log(findMin([-10, -5, -3, -30]) === -30);

function findMax(arr) {
  function helper(arr, index = 0, max = -Infinity) {
    if (arr[index] === undefined || index === arr.length) {
      return max;
    }

    if (arr[index] > max) {
      max = arr[index];
    }

    return helper(arr, index + 1, max);
  }

  return helper(arr);
}

console.log(findMax([12, 1234, 45, 67, 1]) === 1234);
console.log(findMax([10, 20, 30]) === 30);
console.log(findMax([30, 20, 10]) === 30);
console.log(findMax([20, 10, 30]) === 30);
console.log(findMax([10, 20, 30, 10]) === 30);
console.log(findMax([10, 10, 10, 10]) === 10);
console.log(findMax([6]) === 6);
console.log(findMax([8, 6, 7, 5, 3, 7]) === 8);
console.log(findMax([-10, -5, -3, -30]) === -3);
