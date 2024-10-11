/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
1. Empty matrix: []
2. 1x1 matrix: [[1]]
3. Non-square matrix: [[1,2,3], [4,5,6]]
4. Square matrix: [[1,2,3], [4,5,6], [7,8,9]]
5. Matrix with negative numbers: [[-1,-2], [-3,-4]]

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Create a new matrix and swap rows and columns
Time: O(m * n), where m is the number of rows and n is the number of columns
Space: O(m * n) for the new matrix

Algorithm 2: In-place transposition (only works for square matrices)
Time: O(n^2), where n is the number of rows/columns
Space: O(1), as we modify the original matrix

We'll go with Algorithm 1 as it works for all types of matrices.

📆 PLAN
Outline of algorithm 1: 
1. Get the number of rows (m) and columns (n) from the input matrix
2. Create a new matrix with dimensions n x m
3. Iterate through each element of the input matrix
4. Place each element in the new matrix, swapping its row and column indices
5. Return the new transposed matrix

🛠️ IMPLEMENT
Write your algorithm.
*/

function transposeMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;
  const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}

function transpose(matrix) {
  const transposed = [];

  /* Create idx for current column */
  let column = 0;

  /* Get length of each subarray in matrix */
  let length = matrix[0].length;

  /* Create a variable to hold each new row */
  let newRow = [];

  /* While current column (idx) is less than # of elems in each subarray; push matrix[i][column] */
  while (column < length) {
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][column]);
    }

    transposed.push(newRow);
    newRow = [];
    column++;
  }

  return transposed;
}

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// Test cases
console.log(transposeMatrix([])); // []
console.log(transposeMatrix([[1]])); // [[1]]
console.log(transposeMatrix([[1,2,3], [4,5,6]])); // [[1,4], [2,5], [3,6]]
console.log(transposeMatrix([[1,2,3], [4,5,6], [7,8,9]])); // [[1,4,7], [2,5,8], [3,6,9]]
console.log(transposeMatrix([[-1,-2], [-3,-4]])); // [[-1,-3], [-2,-4]]

All test cases pass. The algorithm correctly handles empty matrices, 1x1 matrices,
non-square matrices, square matrices, and matrices with negative numbers.

Time complexity: O(m * n), where m is the number of rows and n is the number of columns.
We iterate through each element of the matrix once.

Space complexity: O(m * n) for the new transposed matrix.

The solution is correct and efficient for the given problem.
'''
*/
