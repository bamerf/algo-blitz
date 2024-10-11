/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
1. Empty matrix: []
2. 1x1 matrix: [[1]]
3. 2x2 matrix: [[1,2],[3,4]]
4. 3x3 matrix: [[1,2,3],[4,5,6],[7,8,9]]
5. 4x4 matrix: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
6. Matrix with negative numbers: [[-1,-2],[-3,-4]]

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Transpose and Reverse
1. Transpose the matrix (swap elements across the main diagonal)
2. Reverse each row
Time: O(n^2), where n is the number of rows/columns in the matrix
Space: O(1), as we modify the matrix in-place

Algorithm 2: Rotate Four Cells at a Time
1. Start from the outermost layer and move inwards
2. For each layer, rotate four cells at a time
Time: O(n^2), where n is the number of rows/columns in the matrix
Space: O(1), as we modify the matrix in-place

📆 PLAN
Outline of algorithm 1 (Transpose and Reverse): 
1. Transpose the matrix:
   - Iterate through the upper triangle of the matrix
   - Swap elements across the main diagonal
2. Reverse each row:
   - Iterate through each row
   - Reverse the elements in the row

🛠️ IMPLEMENT
Write your algorithm.
*/

function rotateImage(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// Diagonals approach
function rotate(matrix) {
  /* Transpose matrix */
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      /* Swap cells diagonally */
      let tempCell = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tempCell;
    }
  }

  /* Reverse each row */
  matrix.forEach((row) => row.reverse());
}

// Layer by layer, rotate in sets of four approach
function rotate(matrix) {
  const n = matrix.length;
  const nLayers = Math.floor(n / 2);

  for (let layer = 0; layer < nLayers; layer++) {
    const nQuads = n - layer * 2 - 1;
    for (let q = 0; q < nQuads; q++) {
      const v1 = matrix[layer][layer + q];
      const v2 = matrix[layer + q][n - 1 - layer];
      const v3 = matrix[n - 1 - layer][n - 1 - layer - q];
      const v4 = matrix[n - 1 - layer - q][layer];
      matrix[layer][layer + q] = v4;
      matrix[layer + q][n - 1 - layer] = v1;
      matrix[n - 1 - layer][n - 1 - layer - q] = v2;
      matrix[n - 1 - layer - q][layer] = v3;
    }
  }
  return matrix;
}

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// Test cases
console.log(rotateImage([])); // []
console.log(rotateImage([[1]])); // [[1]]
console.log(rotateImage([[1,2],[3,4]])); // [[3,1],[4,2]]
console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotateImage([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])); 
// [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]
console.log(rotateImage([[-1,-2],[-3,-4]])); // [[-3,-1],[-4,-2]]

All test cases pass. The algorithm correctly rotates the image for various matrix sizes and element types.

Time Complexity: O(n^2), where n is the number of rows/columns in the matrix.
Space Complexity: O(1), as we modify the matrix in-place.

'''
*/
