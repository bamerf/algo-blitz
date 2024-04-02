/*
Given an unsorted array, perform bubble sort in ascending order.

Bubble sort works by swapping adjacent pairs of elements that are out of order. At every pass through the array, this process causes the largest remaining misplaced element to bubble into position.

Examples:

Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
Given an array: [1] // returns [1]
*/

const bubbleSort = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }

  return arr;
};
