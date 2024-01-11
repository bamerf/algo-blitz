function findTarget(arr, target) {
  function helper(i) {
    if (i === arr.length) {
      return false;
    }

    if (arr[i] === target) {
      return true;
    }

    return helper(i + 1);
  }

  return helper(0);
}

console.log(findTarget([1, 2, 3, 4, 5], 4));
