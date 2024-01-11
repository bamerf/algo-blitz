/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0
 

🔎 EXPLORE
List your assumptions & discoveries:

[] -> null
[1] -> 0
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 

function needs to have index and maxIndex = null args
base case is if at the end of the array return return max index
check if current item is bigger than array[index]
  maxIndex = index
recurse and increment index
 

🛠️ IMPLEMENT
function findMinIndex(array) {
function findMaxIndex(array) {
def findMinIndex(array: list[int]) -> int:
def findMaxIndex(array: list[int]) -> int:

function needs to have index and minIndex = null args
base case is if at the end of the array return return min index
check if current item is smaller than array[index]
  minIndex = index
recurse and increment index
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/*
[10, 1, 200]
 ^

#4
index = 2
minIndex = 1
minValue = 1

*/

function findMinIndex(array, index = 0, minIndex = null, minValue = Infinity) {
  if (index === array.length) {
    return minIndex;
  }

  if (array[index] < minValue) {
    minIndex = index;
    minValue = array[index];
  }

  return findMinIndex(array, index + 1, minIndex, minValue);
}

console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4);
console.log(findMinIndex([10, 20, 30]) == 0);
console.log(findMinIndex([30, 20, 10]) == 2);
console.log(findMinIndex([20, 10, 30]) == 1);
console.log(findMinIndex([10, 20, 30, 10]) == 0);
console.log(findMinIndex([10, 10, 10, 10]) == 0);
console.log(findMinIndex([11]) == 0);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4);
console.log(findMinIndex([-10, -5, -3, -30]) == 3);
console.log(findMinIndex([15, 11]) == 1);
console.log(findMinIndex([15, 11, 12, 13, 14]) == 1);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) == 3);

function findMaxIndex(array, index = 0, maxIndex = null, maxValue = -Infinity) {
  if (index === array.length) {
    return maxIndex;
  }

  if (array[index] > maxValue) {
    maxIndex = index;
    maxValue = array[index];
  }

  return findMaxIndex(array, index + 1, maxIndex, maxValue);
}

console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1);
console.log(findMaxIndex([10, 20, 30]) == 2);
console.log(findMaxIndex([30, 20, 10]) == 0);
console.log(findMaxIndex([20, 10, 30]) == 2);
console.log(findMaxIndex([10, 20, 30, 10]) == 2);
console.log(findMaxIndex([10, 10, 10, 10]) == 0);
console.log(findMaxIndex([11]) == 0);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0);
console.log(findMaxIndex([-10, -5, -3, -30]) == 2);
console.log(findMaxIndex([15, 11]) == 0);
console.log(findMaxIndex([15, 11, 12, 13, 14]) == 0);
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) == 1);
