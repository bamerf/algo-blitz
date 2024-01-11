// function rotateLeft(nums, k) {
//   const newArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       newArray[nums.length - k] = nums[0];
//     } else {
//       newArray[i - k] = nums[i];
//     }
//   }

//   return newArray;
// }

// console.log(rotateLeft([1, 2, 3, 4], 1)); // [2, 3, 4, 1]

function rotateLeft(nums, k) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      console.log(newArray);
      newArray.push(nums[i + (nums.length - k)]);
    } else {
      console.log(newArray);
      newArray.push(nums[i - k]);
    }
  }

  return newArray;
}

console.log(rotateLeft([1, 2, 3, 4], 3)); // [4, 1, 2, 3]
