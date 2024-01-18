/*
binary search on a sorted array
*/

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const middle = Math.floor(low + (high - low) / 2);
    const value = arr[middle];
    if (value === target) {
      return true;
    } else if (value > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
