/*
'''
❓ PROMPT
Given two arrays, `rowSums` and `columnSums`, and a rectangular matrix. Check to see if the two arrays are correct with respect to the matrix. Return true if the ith row sums to the value in `rowSums[i]` for every i and if the jth column sums to `columnSums[j]` for every j. Return false if any of these are incorrect.

Example(s)
matrix = [
  [1, 2],
  [3, 4]
]
rowSums = [3, 7]
columnSums = [4, 6]

will return true.

matrix = [
  [1, 2],
  [3, 4]
]
rowSums = [3, 7]
columnSums = [4, 7]

will return false.
 

🔎 EXPLORE
List your assumptions & discoveries:
1. Each row in the matrix should sum to the corresponding value in the `rowSums` array.
2. Each column in the matrix should sum to the corresponding value in the `columnSums` array.
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()

 To verify, we need to:
 1. Calculate the sum of each row in the matrix and compare it to the values in `rowSums`.
 2. Calculate the sum of each column in the matrix and compare it to the values in `columnSums`.
 If both conditions hold for all rows and columns, return true, otherwise return false.
 

📆 PLAN
Outline of algorithm #: 
1. Initialize a loop to go through each row of the matrix.
2. For each row, calculate the sum of elements.
3. Compare the sum of the row with the corresponding value in `rowSums`.
4. If any row sum doesn't match, return false immediately.
5. Initialize a loop to go through each column of the matrix.
6. For each column, calculate the sum of elements.
7. Compare the sum of the column with the corresponding value in `columnSums`.
8. If any column sum doesn't match, return false immediately.
9. If all rows and columns match, return true.
 

🛠️ IMPLEMENT
function checkSums(matrix, rowSums, columnSums)
def checkSums(matrix, row_sums, column_sums):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const matrix = [
  [1, 2],
  [3, 4],
];

function checkSums(matrix, rowSums, columnSums) {
  //   1. Initialize a loop to go through each row of the matrix.
  for (index in matrix) {
    const row = matrix[index];
    let sum = 0;
    // 2. For each row, calculate the sum of elements.
    for (number of row) {
      sum += number;
    }
    // 3. Compare the sum of the row with the corresponding value in `rowSums`.
    if (sum !== rowSums[index]) {
      // 4. If any row sum doesn't match, return false immediately.
      return false;
    }
  }

  const numCols = matrix[0].length;

  for (let col = 0; col < numCols; col++) {
    let colSum = 0;

    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }

    if (colSum !== columnSums[col]) {
      return false;
    }
  }

  // 5. Initialize a loop to go through each column of the matrix.
  // 6. For each column, calculate the sum of elements.
  // 7. Compare the sum of the column with the corresponding value in `columnSums`.
  // 8. If any column sum doesn't match, return false immediately.
  // 9. If all rows and columns match, return true.

  return true;
}

console.log(checkSums(matrix, [3, 7], [4, 6])); // true
console.log(checkSums(matrix, [3, 7], [4, 7])); // false
console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4, 6]
  ),
  true
);

// better implementation
function checkSums(matrix, rowSums, columnSums) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const value = matrix[r][c];
      rowSums[r] -= value;
      columnSums[c] -= value;
    }
  }

  return (
    rowSums.reduce((acc, curr) => acc && curr === 0, true) &&
    columnSums.reduce((acc, curr) => acc && curr === 0, true)
  );
}

console.log(
  checkSums(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [6, 15],
    [5, 7, 9]
  ),
  true
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4, 7]
  ),
  false
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4, 5]
  ),
  false
);
