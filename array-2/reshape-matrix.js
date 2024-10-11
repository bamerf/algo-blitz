/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
1. Input: mat = [[1,2],[3,4]], r = 1, c = 4
   Output: [[1,2,3,4]]
2. Input: mat = [[1,2],[3,4]], r = 4, c = 1
   Output: [[1],[2],[3],[4]]
3. Input: mat = [[1,2,3],[4,5,6]], r = 3, c = 2
   Output: [[1,2],[3,4],[5,6]]
4. Input: mat = [[1,2],[3,4]], r = 2, c = 4
   Output: [[1,2],[3,4]] (original matrix, as reshaping is not possible)
5. Input: mat = [[1]], r = 1, c = 1
   Output: [[1]] (single element matrix)

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Flatten and Rebuild
1. Check if reshaping is possible
2. Flatten the input matrix into a 1D array
3. Rebuild the new matrix with the desired dimensions
Time: O(m * n), where m and n are the dimensions of the input matrix
Space: O(m * n) for the flattened array and the new matrix

Algorithm 2: Direct Mapping
1. Check if reshaping is possible
2. Iterate through the new matrix dimensions, mapping each element from the old matrix
Time: O(m * n)
Space: O(1) extra space (not counting the output matrix)

📆 PLAN
Outline of algorithm 1 (Flatten and Rebuild): 
1. Check if the total number of elements in the input matrix equals r * c
2. If not, return the original matrix
3. Create a flattened 1D array from the input matrix
4. Create a new r x c matrix
5. Fill the new matrix with elements from the flattened array
6. Return the new matrix

🛠️ IMPLEMENT
Write your algorithm.
*/

function reshapeMatrix(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  // Check if reshaping is possible
  if (m * n !== r * c) {
    return mat;
  }

  // Flatten the input matrix
  const flattened = mat.flat();

  // Create and fill the new matrix
  const result = [];
  for (let i = 0; i < r; i++) {
    const row = [];
    for (let j = 0; j < c; j++) {
      row.push(flattened[i * c + j]);
    }
    result.push(row);
  }

  return result;
}

function matrixReshape(mat, r, c) {
  const or = mat.length; // original row count
  const oc = mat[0].length; // original column count
  let ori = 0; // row index into the original
  let oci = 0; // column index into the original

  if (or * oc !== r * c) return mat;

  function getNext() {
    const out = mat[ori][oci];
    oci++;
    if (oci === oc) {
      oci = 0;
      ori++;
    }
    return out;
  }

  const result = new Array(r);
  for (let i = 0; i < r; i++) {
    result[i] = new Array(c);
    for (let j = 0; j < c; j++) {
      result[i][j] = getNext();
    }
  }

  return result;
}

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// Test cases
console.log(reshapeMatrix([[1,2],[3,4]], 1, 4)); // [[1,2,3,4]]
console.log(reshapeMatrix([[1,2],[3,4]], 4, 1)); // [[1],[2],[3],[4]]
console.log(reshapeMatrix([[1,2,3],[4,5,6]], 3, 2)); // [[1,2],[3,4],[5,6]]
console.log(reshapeMatrix([[1,2],[3,4]], 2, 4)); // [[1,2],[3,4]]
console.log(reshapeMatrix([[1]], 1, 1)); // [[1]]

// All test cases pass. The algorithm correctly handles various input scenarios,
// including cases where reshaping is not possible and single-element matrices.
'''
*/
