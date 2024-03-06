/*
Q. Given an unsorted array, return the number of distinct values. For example, given [1, 1], there are two elements but only one distinct value: 1.

Examples
Input1: []
Output1: 0
Input2: [3, 1, 1, 2, 3, 1, 1, 1, 4]
Output2: 4 // [1, 2, 3, 4]
*/

function solution(array) {
  const set = new Set(array);

  return Array.from(set).length;
}
