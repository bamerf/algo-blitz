/*
'''
❓ PROMPT
In this task, we're going to apply basic 2-dimensional matrix traversals to solve some simple problems. While working on these, look out for other patterns you may have seen previously. Each of these takes the row- and column-major traversals and composites them with simpler ideas you have almost certainly encountered in one-dimensional array problems.

This task is two similar problems in one:
- First, write a function that returns the average of the smallest values in each _column_.
- Write a new version of this function that returns the average of the smallest value in each _row_.

For example, if the for the matrix:

[[1, 5, 3]
 [4, 2, 6]]

The smallest values in each column are 1, 2, and 3. The average of these is 2.

Remember that since we represent a matrix as nested arrays (an array of arrays), many problems on a matrix can be broken down into two array patterns. This makes them easier to reason about and code. 

Example(s)
matrix = [
  [32, 23, 3],
  [23,  7, 5]
]
averageColumnMinimum(matrix) == 11 (because average(23, 7, 3) = 11)
averageRowMinimum(matrix) == 4 (because average(5, 3) = 4)
 

🔎 EXPLORE
List your assumptions & discoveries:

matrix = [
  [32, 23, 3],
  [23,  7, 5]
]

average min column = 23 + 7 + 3 / 3 = 11
average min row = 3 + 5 / 2 = 4

- all rows have the same number of items
  
Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 

matrix = [
  [32, 23, 3],
  [23,  7, 5]
]

- go through each column
- compare column index to next column index
 

🛠️ IMPLEMENT
function averageColumnMinimum(matrix) {
function averageRowMinimum(matrix) {

def averageColumnMinimum(matrix: list[list[int]]) -> float:
def averageRowMinimum(matrix: list[list[int]]) -> float:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const matrix = [
  [32, 23, 3],
  [23, 7, 5],
];

function averageColumnMinimum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let min = matrix[0][i];
    console.log(min);
    for (let j = 1; j < matrix.length; j++) {
      console.log(matrix[j][i]);
      if (matrix[j][i] < min) {
        min = matrix[j][i];
      }
    }
    sum += min;
  }
  console.log(sum / matrix[0].length);
}

averageColumnMinimum(matrix);

function averageRowMinimum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
    sum += min;
  }
  console.log(sum / matrix.length);
}

averageRowMinimum(matrix);
