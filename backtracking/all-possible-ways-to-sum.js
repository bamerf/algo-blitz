/**
Given a set of units and a target value, return all of the ways that these units may be combined to achieve the target value. For example, for units [1, 2] and a target of 4, the output should be:

[
  [1, 1, 1, 1],
  [1, 1, 2],
  [2, 2]
]
Notice that [1, 2, 1] and [2, 1, 1] are also possibilities but we only return the one where the values are sorted from smallest to largest.

The units will always be a non-empty array of positive integers and sorted from small to large. The output should be ordered by those using the small units first before moving to larger and larger units.
 */

function allPossibleWaysToSum(units, target) {
  const result = [];

  function backtrack(startIndex, currentSum, currentCombination) {
    // Base case: if we've reached the target sum
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    // If we've exceeded the target, backtrack
    if (currentSum > target) {
      return;
    }

    // Try each unit starting from startIndex to maintain sorted order
    for (let i = startIndex; i < units.length; i++) {
      const unit = units[i];

      // Add the current unit to our combination
      currentCombination.push(unit);
      currentSum += unit;

      // Recursively try to build the rest of the combination
      // Pass i (not i+1) to allow reusing the same unit
      backtrack(i, currentSum, currentCombination);

      // Backtrack: remove the unit we just added
      currentCombination.pop();
      currentSum -= unit;
    }
  }

  backtrack(0, 0, []);
  return result;
}

// Test cases
console.log('Test 1: units [1, 2], target 4');
console.log(allPossibleWaysToSum([1, 2], 4));
// Expected: [[1,1,1,1], [1,1,2], [2,2]]

console.log('\nTest 2: units [2, 3, 6, 7], target 7');
console.log(allPossibleWaysToSum([2, 3, 6, 7], 7));
// Expected: [[2,2,3], [7]]

console.log('\nTest 3: units [1], target 3');
console.log(allPossibleWaysToSum([1], 3));
// Expected: [[1,1,1]]

console.log('\nTest 4: units [2, 3, 5], target 8');
console.log(allPossibleWaysToSum([2, 3, 5], 8));
// Expected: [[2,2,2,2], [2,3,3], [3,5]]

module.exports = allPossibleWaysToSum;
