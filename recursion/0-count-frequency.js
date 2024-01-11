function frequencyElement(arr, target) {
  function frequencyElementHelper(i) {
    if (i == arr.length) {
      return 0;
    }

    let count = 0;
    if (arr[i] == target) {
      count = 1;
    }

    return count + frequencyElementHelper(i + 1);
  }

  return frequencyElementHelper(0);
}

console.log(frequencyElement([2, 6, 4, 1, 2, 5, 2], 2));
