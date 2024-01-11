/*
'''
❓ PROMPT
You are given an array of integers which may contain duplicate values. Your task is to write a function called countDistinctValues that takes this array as input and returns the count of distinct values in the array.

Example(s)
Input = [1, 2, 2, 3, 4, 4, 5]
Output = 5
Explanation: The 2nd 2 and the 2nd 4 aren't counted as distinct. 7 elements minus 2 duplicates are 5 distinct elements.
 

🔎 EXPLORE
List your assumptions & discoveries:

an array with values, some duplicates, count distinct values
 

Insightful & revealing test cases:

empty array
all the same value
with one distinct
with multiple distincts
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

go through each item
add items to hash and add to count
 

🛠️ IMPLEMENT
function countDistinctValues(array)
def count_distinct_values(array: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const countDistinctValues = (arr) => {
  const set = new Set(arr);
  return set.size;
};

console.log(countDistinctValues([1, 2, 2, 3, 4, 4, 5]));
console.log(countDistinctValues([]));
console.log(countDistinctValues([1, 1, 1, 1]));
console.log(countDistinctValues([1, 1, 2, 2, 3, 3]));
console.log(countDistinctValues([1, 2, 3, 4, 5]));
