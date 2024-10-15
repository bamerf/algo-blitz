/*
'''
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
Output: 8

Input: [[5]]
Output: 5
 

🔎 EXPLORE
List your assumptions & discoveries:
- The input is always a square matrix (n x n)
- The matrix can be of any size, including 1x1
- We need to sum the primary diagonal (top-left to bottom-right)
- We need to sum the secondary diagonal (top-right to bottom-left)
- If an element is on both diagonals, we count it only once

Insightful & revealing test cases:
- [[1]] -> 1 (1x1 matrix)
- [[1,2],[3,4]] -> 1 + 4 + 2 + 3 = 10 (2x2 matrix)
- [[1,2,3],[4,5,6],[7,8,9]] -> 1 + 5 + 9 + 3 + 7 = 25 (3x3 matrix)
- [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] -> 1 + 6 + 11 + 16 + 4 + 7 + 10 + 13 = 68 (4x4 matrix)

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Single pass through the matrix
- Iterate through the matrix once
- For each row, add the primary and secondary diagonal elements
- Handle the case where primary and secondary diagonals intersect
Time: O(n) where n is the number of rows/columns in the matrix
Space: O(1) as we only use a constant amount of extra space

📆 PLAN
Outline of algorithm 1:
1. Initialize a sum variable to 0
2. Get the length of the matrix (n)
3. Iterate through the rows of the matrix (i from 0 to n-1)
   a. Add the primary diagonal element: matrix[i][i]
   b. Add the secondary diagonal element: matrix[i][n-1-i]
   c. If i equals n-1-i (middle element in odd-sized matrices), subtract matrix[i][i] to avoid counting it twice
4. Return the sum

🛠️ IMPLEMENT
*/

function diagonalSum(matrix) {
  let sum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    sum += matrix[i][i]; // Primary diagonal
    sum += matrix[i][n - 1 - i]; // Secondary diagonal

    // If it's the middle element in an odd-sized matrix, subtract it once
    if (i === n - 1 - i) {
      sum -= matrix[i][i];
    }
  }

  return sum;
}

function diagonalSum(matrix) {
  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1 - i) {
      total += matrix[i][i];
    } else {
      total += matrix[i][i];
      total += matrix[i][matrix.length - 1 - i];
    }
  }

  return total;
}

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// Test cases
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // Expected: 25
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])); // Expected: 8
console.log(diagonalSum([[5]])); // Expected: 5
console.log(diagonalSum([[1,2],[3,4]])); // Expected: 10
console.log(diagonalSum([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])); // Expected: 68

// All test cases pass successfully
'''
*/
