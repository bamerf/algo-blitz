/*
'''
❓ PROMPT
Write a function that traverses a matrix in diagonal fashion, starting from the bottom left corner. For example if the input matrix is:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Then the desired output is:

[7, 4, 8, 1, 5, 9, 2, 6, 3]

Create a new array for the linearized output to be returned.

Example(s)
[
  [1, 2],
  [3, 4],
] -> [3, 1, 4, 2]
 

🔎 EXPLORE
List your assumptions & discoveries:
- The matrix is not empty
- The matrix is rectangular (all rows have the same length)
- We start from the bottom-left corner and move up-right
- We traverse each diagonal from bottom-left to top-right
- When we reach the top or right edge, we start a new diagonal
 

Insightful & revealing test cases:
- Single element matrix: [[1]] -> [1]
- Single row matrix: [[1, 2, 3]] -> [1, 2, 3]
- Single column matrix: [[1], [2], [3]] -> [3, 2, 1]
- Non-square matrix: [[1, 2, 3], [4, 5, 6]] -> [4, 1, 5, 2, 6, 3]
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterate through diagonals
- Start from the bottom-left corner
- For each diagonal, traverse from bottom-left to top-right
- Move to the next starting point (either up or right)
- Repeat until all elements are visited
Time: O(m * n), where m is the number of rows and n is the number of columns
Space: O(m * n) for the output array
 

📆 PLAN
Outline of algorithm #: 
1. Initialize an empty result array
2. Get the number of rows and columns in the matrix
3. Start from the bottom-left corner (row = m-1, col = 0)
4. While we haven't visited all elements:
   a. Traverse the current diagonal from bottom-left to top-right
   b. Move to the next starting point (up if possible, otherwise right)
5. Return the result array
 

🛠️ IMPLEMENT
function diagonalTraversal(m)
def diagonal_traversal(m)
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function diagonalTraversal(m) {
  if (m.length === 0 || m[0].length === 0) return [];
  const nr = m.length; // number of rows
  const nc = m[0].length; // number of columns

  const starts = [];
  for (let i = nr - 1; i > 0; i--) {
    starts.push([i, 0]);
  }
  for (let i = 0; i < nc; i++) {
    starts.push([0, i]);
  }

  const output = [];
  // For each [starting row index, starting column index] pair...
  for (const [sr, sc] of starts) {
    // Beginning at this location, traverse diagonally.
    for (let i = 0; sr + i < nr && sc + i < nc; i++) {
      output.push(m[sr + i][sc + i]);
    }
  }
  return output;
}

// matrix[2][0];
// matrix[1][0];
// matrix[2][1];
// matrix[0][0];
// matrix[1][1];
// matrix[2][2];
// matrix[0][1];
// matrix[1][2];
// matrix[0][2];

console.log(
  diagonalTraversal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [7, 4, 8, 1, 5, 9, 2, 6, 3]
