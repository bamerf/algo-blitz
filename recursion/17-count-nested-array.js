function countArrays(array) {
  if (array == null) {
    console.log('base case');
    return 0;
  }

  let sumTotal = 1; // always count itself

  array.forEach((element) => {
    if (Array.isArray(element)) sumTotal += countArrays(element);
  });

  return sumTotal;
}
