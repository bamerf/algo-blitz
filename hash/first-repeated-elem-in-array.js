/*
'''
❓ PROMPT
Given an array, return the first element is repeated if you were to traverse the array from left to right.

Example(s)
firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2
 

🔎 EXPLORE
List your assumptions & discoveries:

There's an array with values and some values are repeated. We want to return the first repeated value and stop iterating through the array.
 

Insightful & revealing test cases:

firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2
firstRepeatedElement([1, 2, 3, 4, 5, 6]) == None
firstRepeatedElement([1, 2, 3, 4, 5, 6, 1]) == 1
firstRepeatedElement([1, 2, 3, 4, 5, 6, 1, 1]) == 1
firstRepeatedElement([1, 1, 1, 1]) == 1
firstRepeatedElement([]) == None
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #:

Declare a variable. Iterate through the array. If the element is not in the variable, add it. If it is, return it.
 

🛠️ IMPLEMENT
function firstRepeatedElement(arr) {
def firstRepeatedElement(arr: list[int]) -> int: 

const firstRepeatedElement = (arr) => {
  const seen = new Set();

  for (const elem of arr) {
    if (seen.has(elem)) {
      return elem;
    } else {
      seen.add(elem);
    }
  }
};
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.



'''
*/

const firstRepeatedElement = (arr) => {
  const seen = new Set();

  for (const elem of arr) {
    if (seen.has(elem)) {
      return elem;
    } else {
      seen.add(elem);
    }
  }

  return null;
};

console.log(firstRepeatedElement([]) === null);
console.log(firstRepeatedElement([5]) === null);
console.log(firstRepeatedElement([5, 5]) === 5);
console.log(firstRepeatedElement([5, 10]) === null);
console.log(firstRepeatedElement([1, 2, 3, 4]) === null);
console.log(firstRepeatedElement([1, 2, 1, 3]) === 1);
console.log(firstRepeatedElement([7, 7, 1, 1]) === 7);
console.log(firstRepeatedElement([2, 8, 8, 8]) === 8);
console.log(firstRepeatedElement([1, 2, 3, 2, 1, 1]) === 2);
