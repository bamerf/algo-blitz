/*

A number is a "stepping number" if every pair of adjacent base-10 digits has an absolute difference of exactly 1. Single digit numbers are by definition stepping numbers. This means 3, 12, and 5676 are all stepping numbers, but 11, 24, and 3235 are not.
Given inclusive min and max values, find all the stepping numbers in that range and return them in an array in sorted order.
Example(s)
Params: low = 10, high = 15
Result: [10,12]

Params: low = 0, high = 21
Result: [0,1,2,3,4,5,6,7,8,9,10,12,21]

*/

// Backtracking
function steppingNumbers(low, high) {
  const results = [];
  if (low === 0) results.push(0);

  function dfs(number, lastDigit) {
    if (number >= low && number <= high) {
      results.push(number);
    }
    if (number > high) return;

    const x10 = number * 10;
    if (lastDigit !== 9) {
      const nextDigit = lastDigit + 1;
      dfs(x10 + nextDigit, nextDigit);
    }
    if (lastDigit !== 0) {
      const nextDigit = lastDigit - 1;
      dfs(x10 + nextDigit, nextDigit);
    }
  }

  for (let i = 1; i < 10; i++) {
    dfs(i, i);
  }

  return results.sort((a, b) => a - b);
}

// Linear walk
function steppingNumbers(low, high) {
  function isSteppingNumber(i) {
    while (i > 10) {
      const a = i % 10;
      i = Math.floor(i / 10);
      const b = i % 10;
      if (Math.abs(a - b) !== 1) return false;
    }
    return true;
  }

  const results = [];
  for (let i = low; i <= high; i++) {
    if (isSteppingNumber(i)) {
      results.push(i);
    }
  }
  return results;
}

console.log(steppingNumbers(10, 15), [10, 12]);
console.log(steppingNumbers(0, 21), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21]);
console.log(steppingNumbers(0, 0), [0]);
console.log(steppingNumbers(11, 11), []);
console.log(steppingNumbers(13, 20), []);
