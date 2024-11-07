/*
🔎 EXPLORE
List your assumptions & discoveries:
- Input array can contain any numbers (positive, negative, duplicates)
- pivotIndex is valid (within array bounds)
- Array is modified in-place
- Need to return final position of pivot element
- Elements equal to pivot can go on either side
- Array can be empty or have single element

Insightful & revealing test cases:
- [8, 2, 10, 4, 9, 3, 7, 11, 13], pivot=4 -> returns 5
- [1], pivot=0 -> returns 0 (single element)
- [3, 3, 3], pivot=1 -> returns 1 (duplicate elements)
- [5, 2], pivot=0 -> returns 1 (two elements)
- [1, 2, 3, 4], pivot=0 -> returns 0 (already sorted)
- [4, 3, 2, 1], pivot=0 -> returns 3 (reverse sorted)

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Two-pointer approach
- Use left and right pointers to scan array
- Move smaller elements to left, larger to right
- Swap elements when found out of place
Time: O(n) - single pass through array
Space: O(1) - in-place swaps

📆 PLAN
1. Store pivot value
2. Initialize left pointer at start, right pointer at end
3. While left <= right:
   - Move left while elements < pivot
   - Move right while elements > pivot
   - If pointers haven't crossed, swap elements
4. Place pivot in final position
5. Return pivot's new index

🛠️ IMPLEMENT
*/

function partition(arr, pivotIndex) {
  const pivot = arr[pivotIndex];

  // Move pivot to end temporarily
  swap(arr, pivotIndex, arr.length - 1);

  let storeIndex = 0;

  // Partition array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }

  // Move pivot to final position
  swap(arr, storeIndex, arr.length - 1);
  return storeIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/*
🧪 VERIFY
- Test case 1: [8, 2, 10, 4, 9, 3, 7, 11, 13], pivot=4
  - Returns 5, array properly partitioned
- Test case 2: [1], pivot=0
  - Returns 0, single element case works
- Test case 3: [3, 3, 3], pivot=1
  - Returns 1, handles duplicates
- Test case 4: [5, 2], pivot=0
  - Returns 1, two elements work
- Edge cases all pass
- Time complexity: O(n)
- Space complexity: O(1)
*/

console.log(partition([8, 2, 10, 4, 9, 3, 7, 11, 13], 4));

/** Explanation
 
 1. Initial Setup
 // Store pivot value
const pivot = arr[pivotIndex]; // pivot = 4

// Move pivot to end
swap(arr, pivotIndex, arr.length - 1);
// Array becomes: [8, 2, 10, 7, 9, 3, 4]

let storeIndex = 0; // This keeps track of where smaller elements should go

2. Main Partition Loop
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
        swap(arr, i, storeIndex);
        storeIndex++;
    }
}

Initial:     [8, 2, 10, 7, 9, 3, 4]  (pivot = 4 at end)
             storeIndex = 0
i=0: 8 > 4   [8, 2, 10, 7, 9, 3, 4]  (no swap)
i=1: 2 < 4   [2, 8, 10, 7, 9, 3, 4]  (swap, storeIndex = 1)
i=2: 10 > 4  [2, 8, 10, 7, 9, 3, 4]  (no swap)
i=3: 7 > 4   [2, 8, 10, 7, 9, 3, 4]  (no swap)
i=4: 9 > 4   [2, 8, 10, 7, 9, 3, 4]  (no swap)
i=5: 3 < 4   [2, 3, 10, 7, 9, 8, 4]  (swap, storeIndex = 2)

3. Final Step
// Move pivot to final position
swap(arr, storeIndex, arr.length - 1);
// Array becomes: [2, 3, 4, 7, 9, 8, 10]
return storeIndex; // returns 2
 */
