function selectionSort(arr, start = 0) {
  // If there is only one element to be sorted, there is
  // nothing to do.
  if (start > arr.length - 1) {
    return arr;
  }

  // Use recursion to find the end.
  selectionSort(arr, start + 1);

  // Recursive function to find the index of the largest value
  // from the start of the array (start at zero) up to index last.
  function indexOfLargest(last, start = 0, largestValueIndex = 0) {
    if (start > last) {
      return largestValueIndex;
    }
    return indexOfLargest(
      last,
      start + 1,
      arr[largestValueIndex] < arr[start] ? start : largestValueIndex
    );
  }

  const swapWith = indexOfLargest(start);
  // Swap the current value with the one identified as largest
  [arr[start], arr[swapWith]] = [arr[swapWith], arr[start]];

  return arr;
}
