/*
'''
❓ PROMPT
Given an array and a target count X, return the number of elements that is repeated exactly X times.

Example(s)
[1, 2, 3, 1, 2, 3], 2 == 3
[1, 2, 3, 1, 2, 3], 3 == 0
[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 == 1

- create hash
- loop through the array
- for each item
  - if item exists in hash
    - increment
  - if doesn't exist in has
    - add number in hash

- loop through the hash
- for each item
  - if count equals X
    - add to total count
 

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
function countExactOccurrences(arr, exactOccurrences) {
def countExactOccurrences(arr: list[int], exactOccurrences: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function countExactOccurrences(arr, exactOccurrences) {
  let totalCount = 0;
  const numbersCount = {};

  arr.forEach((item) => {
    const stringNumber = item.toString();
    if (numbersCount[stringNumber]) {
      numbersCount[stringNumber] += 1;
    } else {
      numbersCount[stringNumber] = 1;
    }
  });

  for (number in numbersCount) {
    if (numbersCount[number] === exactOccurrences) {
      totalCount += 1;
    }
  }

  return totalCount;
}

let arr = [1, 2, 3, 1, 2, 3];
console.log(countExactOccurrences(arr, 2) === 3);
console.log(countExactOccurrences(arr, 3) === 0);

arr = [1, 3, 3, 5, 5, 5, 5, 5, 3];
console.log(countExactOccurrences(arr, 1) === 1);
console.log(countExactOccurrences(arr, 3) === 1);
console.log(countExactOccurrences(arr, 5) === 1);

arr = [10, 10, 10, 10];
console.log(countExactOccurrences(arr, 1) === 0);
console.log(countExactOccurrences(arr, 3) === 0);
console.log(countExactOccurrences(arr, 4) === 1);
console.log(countExactOccurrences(arr, 6) === 0);

arr = [100];
console.log(countExactOccurrences(arr, 1) === 1);
console.log(countExactOccurrences(arr, 5) === 0);
console.log(countExactOccurrences(arr, 100) === 0);
