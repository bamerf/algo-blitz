/**
  Given a string tiles consisting of 1 to 7 uppercase English letters, each letter represents a square tile that can be used at most once.
  A sequence is any non-empty string that can be formed by arranging some or all of the tiles.
  Two sequences are considered different if they differ in length or if at least one position contains a different letter.
  Return the total number of different sequences that can be formed.
  The result is guaranteed to fit in a 32-bit signed integer.
  Example(s)
  Input: AAB
  Output: 8

  Input: V
  Output: 1
 */

//   // Depth-first search with backtracking and a frequency map
// function numTilePossibilities(tiles) {
//   const counts = {};
//   for (const ch of tiles) {
//     counts[ch] = (counts[ch] || 0) + 1;
//   }

//   function dfs() {
//     let total = 0;
//     for (const ch in counts) {
//       if (counts[ch] === 0) continue;
//       // choose the current letter
//       total += 1;            // count sequence ending here
//       counts[ch]--;          // use it
//       total += dfs();        // explore extensions
//       counts[ch]++;          // backtrack
//     }
//     return total;
//   }

//   return dfs();
// }

// // export for testing
// module.exports = { numTilePossibilities };
