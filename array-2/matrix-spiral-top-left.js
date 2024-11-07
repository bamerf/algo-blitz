/**

 * Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order starting from the top left element.

Examples:

Given a matrix:
[               
    [1, 2, 3],            
    [4, 5, 6],          
    [7, 8, 9]  
]   
// returns: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Given a matrix:
[
    [1, 2, 3],
    [4. 5. 6]
]

matrix[0][0]
matrix[0][1]
matrix[0][2]

matrix[1][2]
matrix[2][2]
matrix[2][1]
matrix[2][0]
matrix[1][0]
matrix[1][1]

top = 1
right = 1
bottom = 2
left = 0

array = [1, 2, 3, 6, 9]
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function solution(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const result = [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    // i=2 right=2, x3 iterations
    for (let i = 0; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse right column
    // i=2 right=2 bottom=2, x2 iterations
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // if (top <= bottom) {
    //     // Traverse bottom row
    //     for (let i = right; i >= left; i--) {
    //         result.push(matrix[bottom][i]);
    //     }
    //     bottom--;
    // }

    // if (left <= right) {
    //     // Traverse left column
    //     for (let i = bottom; i >= top; i--) {
    //         result.push(matrix[i][left]);
    //     }
    //     left++;
    // }
  }

  return result;
}

console.log(solution(matrix));
