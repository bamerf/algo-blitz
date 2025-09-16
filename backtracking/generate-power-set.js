/*

You are given an integer array nums containing only distinct values. Return all possible subsets (the power set).
A subset is any collection of elements from the array, including the empty set and the set itself. The subsets may be returned in any order, but no duplicate subsets should appear in the result.
Constraints
• 0 ≤ nums.length ≤ 10
• -10 ≤ nums[i] ≤ 10 and all nums[i] are unique
Example(s)
Input: [1,2]  ->  [[], [1], [2], [1,2]]
Input: [0]    ->  [[], [0]]

*/

function subsets(nums) {
  const output = [];

  function helper(startIndex, subset) {
    // Add the current subset to output
    output.push([...subset]);

    // Generate subsets by adding elements from startIndex onwards
    for (let i = startIndex; i < nums.length; i++) {
      subset.push(nums[i]);
      helper(i + 1, subset);
      subset.pop();
    }
  }

  helper(0, []);

  return output;
}

console.log(subsets([1, 2, 3]));
