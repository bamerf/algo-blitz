// follow up 2: Use constant space.
//             vv
// [4, 2, 6, 7, 8, 7]

// - start two pointers at index 0 and 1.
// - use the second pointer to loop through the rest of the array until < arr.len
//   - if it occurs before the second pointer, remove the element in place
//   - otherwise, move the first pointer to the next element
//   - and repeat

const array = [1, 1, 2, 2, 1, 3, 4, 5, 2];

//  v  v
// [1, 1, 2, 2, 1, 3, 4, 5, 2]
function removeDuplicate(arr) {
  let first = 0;
  let second = 1;

  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      arr.splice(second, 1);
    } else {
      first++;
      second = first + 1;
    }
  }

  return arr;
}

console.log(removeDuplicate(array));
