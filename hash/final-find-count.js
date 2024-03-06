/*
Q. Given an array of positive integers, find the first element that repeats at least k times.
*/

function solution(array, k) {
  const map = {};

  if (k === 1 && array.length > 0) {
    return array[0];
  }

  for (let item of array) {
    const key = item;
    const value = map[key];
    console.log(map);
    if (key in map) {
      if (value + 1 === k || value + 1 > k) {
        return key;
      }
      map[key] = value + 1;
    } else {
      map[key] = 1;
    }
  }

  return -1;
}
