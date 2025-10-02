/*

Write a function that, given an array of integers nums that may contain duplicates, returns all distinct permutations of those integers. Each permutation should be represented as a new array, and the set of permutations may be returned in any order.
Example(s)
Input: [1,1,2]
Output: [[1,1,2], [1,2,1], [2,1,1]]

Input: [1]
Output: [[1]]

*/

function permuteUnique(nums) {
  // Build frequency map <num, count>
  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const res = [];
  const cur = [];

  function backtrack() {
    if (cur.length === nums.length) {
      res.push([...cur]);
      return;
    }
    // Iterate through distinct numbers
    for (const [num, count] of freq.entries()) {
      if (count === 0) continue;
      // Choose
      freq.set(num, count - 1);
      cur.push(num);

      backtrack();

      // Un-choose
      cur.pop();
      freq.set(num, count);
    }
  }

  backtrack();
  return res;
}

function assertPermuteUnique(fn) {
  const cases = [
    {
      input: [1, 1, 2],
      expected: [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ],
    },
    { input: [], expected: [[]] },
    { input: [1], expected: [[1]] },
    {
      input: [1, 2, 3],
      expected: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    },
    { input: [2, 2, 2], expected: [[2, 2, 2]] },
  ];
  const normalize = (arr) =>
    arr
      .map((a) => a.join(','))
      .sort()
      .join('|');
  for (const { input, expected } of cases) {
    const res = fn([...input]);
    if (normalize(res) !== normalize(expected)) {
      throw new Error(
        'Failed for ' + JSON.stringify(input) + ': got ' + JSON.stringify(res)
      );
    }
  }
  console.log('All JS tests passed!');
}

// Example usage:
assertPermuteUnique(permuteUnique);
