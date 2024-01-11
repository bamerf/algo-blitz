// Sum all the elements in an array ([3,1,2,3,1] => 10)

function sum(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }

  return arr[index] + sum(arr, index + 1);
}

console.log(sum([1, 2, 3, 4, 5]));

// Remove all target elements from an array ([3, 2, 1, 2, 3], 2 => [3,1,3])
function removeTarget(array, k, index = 0) {
  if (index === array.length) {
    return array;
  }

  if (array[index] === k) {
    array.splice(index, 1);
  }

  return removeTarget(array, k, index + 1);
}

console.log(removeTarget([3, 2, 1, 2, 3], 2));

// Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true, [3, 2, 1] => false)
function hasPalindrom(array, index = 0) {
  // left pointer
  // right pointer
  let left = index;
  let right = array.length - 1 - index;

  // left equals right
  // return true
  if (left === right) {
    return true;
  }

  // if item left doesn't equal item right
  // return false
  if (array[left] !== array[right]) {
    return false;
  }

  // call, incrmenet left, decrement right
  return hasPalindrom(array, index + 1);
}

console.log(hasPalindrom([4, 3, 2, 1, 2, 3, 4]));

// Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])

// [1, 2, 3, 4]
//  0  1  2  3
//     0  1  2
//  3

// [4, 1, 2, 3]
function shiftElements(array, index = 0, newArr = []) {
  if (index === array.length - 1) {
    newArr[0] = array[index];
    return newArr;
  }

  newArr[index + 1] = array[index];

  return shiftElements(array, index + 1, newArr);
}

console.log(shiftElements([1, 2, 3, 4]));
