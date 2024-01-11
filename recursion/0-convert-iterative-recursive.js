/*
'''
❓ PROMPT
Let's practice recursion by converting functions to and from recursive implementations. Copy the started code in the language of your choice below, then implement the missing functions and test! 

While reading the recursive implementation of *recursiveFactorial* as well as writing *recursiveMax*, consider the following:

1. What is my base case?
2. Which arguments do I need?
3. What do I do at each recursive step?

Example(s)
iterativeFactorial(3) -> 6
iterativeFactorial(4) -> 24

recursiveMax([4, 2, 7] -> 7
recursiveMax([1, -5, 0] -> 1
 

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
Javascript Starter Code

function recursiveFactorial(x) {
  if (x <= 1) return 1;
  else return x * recursiveFactorial(x - 1);
}

function iterativeFactorial(x) {
  // TODO: implement
}

function iterativeMax(arr) {
  let result = arr.length > 0 ? arr[0] : null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) result = arr[i];
  }

  return result;
}


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function recursiveFactorial(x) {
//   if (x <= 1) return 1;
//   else return x * recursiveFactorial(x - 1);
// }

function iterativeFactorial(x) {
  if (x <= 1) return 1;

  let factor = x;

  for (let i = x - 1; i > 0; i--) {
    factor *= i;
  }

  return factor;
}

// console.log(iterativeFactorial(0) === 1);
// console.log(iterativeFactorial(1) === 1);
// console.log(iterativeFactorial(3) === 6);
// console.log(iterativeFactorial(4) === 24);
// console.log(iterativeFactorial(10) === 3628800);

function recursiveMax(arr, curMax = -Infinity, i = 0) {
  if (i > arr.length - 1) {
    return curMax;
  }

  if (curMax < arr[i]) {
    return recursiveMax(arr, arr[i], ++i);
  }

  return recursiveMax(arr, curMax, ++i);
}

console.log(recursiveMax([4, 2, 7]) === 7);
console.log(recursiveMax([1, -5, 0]) === 1);
console.log(recursiveMax([1, 2, 7]) === 7);
console.log(recursiveMax([1, 0, -5]) === 1);
console.log(recursiveMax([-10, -3, -5]) === -3);
