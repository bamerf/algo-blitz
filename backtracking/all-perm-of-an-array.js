/*
 * Copyright (c) 2024
 * All Permutations of an Array - Swapping Approach
 *
 * Given an array of n integers, generate all permutations using swapping and prefix method.
 *
 * Time Complexity: O(n! * n)
 * - There are n! permutations total
 * - Each permutation requires O(n) time to copy into results array
 * - The recursive calls themselves are O(n!) but copying dominates
 *
 * Space Complexity: O(n! * n + n)
 * - O(n! * n) for storing all permutations in results
 * - O(n) for recursion stack depth
 *
 * Detailed Time Complexity Analysis:
 * - Level 0: 1 call, n choices → n recursive calls
 * - Level 1: n calls, (n-1) choices each → n * (n-1) recursive calls
 * - Level 2: n*(n-1) calls, (n-2) choices each → n * (n-1) * (n-2) calls
 * - ...
 * - Level n-1: n! calls, 1 choice each → n! base case hits
 *
 * Total recursive calls: 1 + n + n*(n-1) + ... + n! ≈ O(n!)
 * Each base case does O(n) work to copy array → O(n! * n)
 */
function generatePermutations(nums) {
  const results = [];

  function dfs(index) {
    // Base case: we've fixed all positions
    if (index === nums.length) {
      // O(n) operation - copying the array
      results.push([...nums]);
      return;
    }

    // Try each remaining element at current position
    for (let i = index; i < nums.length; i++) {
      // O(1) - swap elements
      [nums[index], nums[i]] = [nums[i], nums[index]];

      // Recursive call to fix next position
      dfs(index + 1);

      // O(1) - backtrack by swapping back
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }

  dfs(0);

  return results;
}
