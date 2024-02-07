/*
Q. Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

function selectionSortRecursive(arr, start = 0) {
  // If there is only one element to be sorted, there is
  // nothing to do.
  if (start > arr.length - 1) {
    return arr;
  }

  // Use recursion to find the end.
  selectionSort(arr, start + 1);

  // Recursive function to find the index of the largest value
  // from the start of the array (start at zero) up to index last.
  function findIndexOfLargest(last, start = 0, largestValueIndex = 0) {
    if (start > last) {
      return largestValueIndex;
    }

    return findIndexOfLargest(
      last,
      start + 1,
      arr[largestValueIndex] < arr[start] ? start : largestValueIndex
    );
  }

  const indexOfLargest = findIndexOfLargest(start);
  // Swap the current value with the one identified as largest
  [arr[start], arr[indexOfLargest]] = [arr[indexOfLargest], arr[start]];

  return arr;
}

console.log(selectionSort([])); // []
console.log(selectionSort([1])); // [1]
console.log(selectionSortRecursive([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

console.log(selectionSortRecursive([])); // []
console.log(selectionSortRecursive([1])); // [1]
console.log(selectionSortRecursive([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(selectionSortRecursive([-10, 1, 3, 8, -13, 32, 9, 5]));
