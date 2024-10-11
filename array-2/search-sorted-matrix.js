/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
1. Empty matrix: []
2. Single element matrix: [[5]]
3. Matrix with one row: [[1, 3, 5, 7]]
4. Matrix with one column: [[1], [3], [5], [7]]
5. Large matrix with target at the beginning: [[1, 3, 5], [7, 9, 11], [13, 15, 17]], target = 1
6. Large matrix with target at the end: [[1, 3, 5], [7, 9, 11], [13, 15, 17]], target = 17
7. Matrix with target not present: [[1, 3, 5], [7, 9, 11], [13, 15, 17]], target = 6
8. Matrix with duplicate values: [[1, 2, 3], [4, 5, 6], [7, 8, 8]], target = 8

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Binary Search on Each Row
- Perform binary search on each row of the matrix
Time: O(m * log n), where m is the number of rows and n is the number of columns
Space: O(1)

Algorithm 2: Treat as a Sorted Array
- Flatten the 2D matrix into a 1D sorted array and perform binary search
Time: O(log(m*n)), where m is the number of rows and n is the number of columns
Space: O(1)

Algorithm 3: Start from Top-Right Corner
- Start from the top-right corner and move left or down based on comparisons
Time: O(m + n), where m is the number of rows and n is the number of columns
Space: O(1)

📆 PLAN
Outline of algorithm #3 (Start from Top-Right Corner): 
1. Start from the top-right corner of the matrix
2. While we're within the matrix bounds:
   a. If the current element is equal to the target, return true
   b. If the current element is greater than the target, move left
   c. If the current element is less than the target, move down
3. If we exit the loop, the target was not found, return false

🛠️ IMPLEMENT
Write your algorithm.
*/

// solution
function searchSortedMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}

// other example
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const n = rows * cols;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = matrix[Math.floor(mid / cols)][mid % cols];
    if (value === target) return true;
    if (value > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// Test cases
console.log(searchSortedMatrix([], 5)); // false
console.log(searchSortedMatrix([[5]], 5)); // true
console.log(searchSortedMatrix([[1, 3, 5, 7]], 3)); // true
console.log(searchSortedMatrix([[1], [3], [5], [7]], 5)); // true
console.log(searchSortedMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 1)); // true
console.log(searchSortedMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 17)); // true
console.log(searchSortedMatrix([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 6)); // false
console.log(searchSortedMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 8]], 8)); // true

Time Complexity: O(m + n), where m is the number of rows and n is the number of columns
Space Complexity: O(1), as we only use a constant amount of extra space

The algorithm works efficiently by starting from the top-right corner and eliminating either a row or a column in each iteration. This approach takes advantage of the sorted nature of the matrix in both directions.
'''
*/
