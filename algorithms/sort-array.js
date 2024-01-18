// [0, 1, 2, 0, 0, 0 ,0 ,1, 1, 1, 0, 2, 1, 2, 1] => sorted array of 0, 1, 2 in O(n) time complexity and O(1) space complexity

// in javascript we can use sort method to sort the array but it will take O(nlogn) time complexity and O(1) space complexity

// */

function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

function sortArray(arr) {
  const dict = {};

  for (const elem of arr) {
    if (!dict[elem]) {
      dict[elem] = 1;
    } else {
      dict[elem] += 1;
    }
  }

  for (i = 0; i < dict[0]; i++) {
    arr[i] = 0;
  }

  for (i = dict[0]; i < dict[1] + dict[0]; i++) {
    arr[i] = 0;
  }

  for (i = dict[0] + dict[1]; i < dict[2] + dict[1] + dict[0]; i++) {
    arr[i] = 0;
  }
}
