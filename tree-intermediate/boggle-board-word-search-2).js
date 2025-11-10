/**
 
You're given a rectangular grid of lowercase letters, board, and an array of strings, words. A word can be built by starting at any cell and repeatedly moving one cell up, down, left, or right (no diagonals) to collect sequential letters. The same grid cell may not be used more than once while spelling a single word.
Return every word from words that can be built on the board (the order of the output is not important).
Example(s)
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words = ["oath","pea","eat","rain"] → ["eat","oath"]

board = [["a","b"],["c","d"]]
words = ["abcb"] → []

 */

const assert = require('assert');

class TrieNode {
  // Technique #1: TRIE (Prefix Tree) Data Structure
  constructor() {
    this.children = new Map();
    this.word = null; // marks completion of a word
  }
  insert(word) {
    // Technique #1: TRIE - Building the prefix tree
    let node = this;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.word = word;
  }
}

function findWords(board, words) {
  // Technique #9: EARLY RETURN - Guard clause for empty inputs
  if (!board.length || !board[0].length || !words.length) return [];

  // Technique #1: TRIE - Build Trie from all words
  const root = new TrieNode();
  for (const w of words) root.insert(w);

  const m = board.length,
    n = board[0].length;
  const found = [];
  // Technique #5: DIRECTION VECTORS - 4-directional movement offsets
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Technique #2: DFS - Depth-First Search function
  const dfs = (r, c, node) => {
    const ch = board[r][c];
    // Technique #9: EARLY RETURN - If character not in trie, stop exploring
    // Technique #1: TRIE - Check if current character exists in trie path
    if (!node.children.has(ch)) return;
    const nxt = node.children.get(ch);

    // Technique #8: DEDUPLICATION - Mark word as found to prevent duplicates
    if (nxt.word) {
      found.push(nxt.word);
      nxt.word = null; // deduplicate
    }

    // Technique #4: IN-PLACE STATE MARKING - Mark cell as visited
    // Technique #3: BACKTRACKING - Step 1: Make a choice (modify state)
    board[r][c] = '#'; // mark visited
    // Technique #5: DIRECTION VECTORS - Loop through all possible directions
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      // Technique #6: BOUNDARY CHECKING - Validate indices are within bounds
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] !== '#') {
        // Technique #2: DFS - Recursive call to explore neighbor
        // Technique #3: BACKTRACKING - Step 2: Explore recursively
        dfs(nr, nc, nxt);
      }
    }
    // Technique #4: IN-PLACE STATE MARKING - Restore original cell value
    // Technique #3: BACKTRACKING - Step 3: Unmake the choice (restore state)
    board[r][c] = ch; // restore

    // Technique #7: PRUNING - Remove completed leaf nodes to optimize
    if (nxt.children.size === 0) node.children.delete(ch);
  };

  // Technique #2: DFS - Start DFS from every cell in the board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root);
    }
  }

  return found;
}
let board, words;

board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
words = ['oath', 'pea', 'eat', 'rain'];
assert.deepStrictEqual(findWords(board, words).sort(), ['eat', 'oath'].sort());

board = [
  ['a', 'b'],
  ['c', 'd'],
];
words = ['ef', 'gh'];
assert.deepStrictEqual(findWords(board, words), []);

board = [
  ['a', 'b'],
  ['c', 'd'],
];
words = ['ab', 'abc', 'ab', 'abcd'];
assert.deepStrictEqual(findWords(board, words), ['ab']);

board = [['z']];
words = ['z', 'zz'];
assert.deepStrictEqual(findWords(board, words), ['z']);

assert.deepStrictEqual(findWords([], ['a', 'b']), []);
assert.deepStrictEqual(findWords([['a']], []), []);

console.log('✅ All JavaScript tests passed.');

/**
 * ===================================================================
 * TECHNIQUES REFERENCE GUIDE
 * ===================================================================
 *
 * This section documents all the algorithmic techniques used in this
 * solution. Reference this when encountering similar problems.
 *
 * -------------------------------------------------------------------
 * 1. TRIE (PREFIX TREE) DATA STRUCTURE
 * -------------------------------------------------------------------
 * Description: A tree-like data structure that stores strings with shared
 *              prefixes efficiently. Each node represents a character, and
 *              paths from root to nodes represent strings.
 *
 * Key Benefits:
 *   - Efficient prefix matching: O(L) where L = word length
 *   - Shares common prefixes: "eat" and "each" share "ea" path
 *   - Enables early termination: can stop exploring if prefix doesn't exist
 *
 * When to Use:
 *   - Multiple string matching problems (searching many words)
 *   - Prefix matching (autocomplete, spell check)
 *   - Word search problems (like this one!)
 *   - Problems asking "find all words that start with X"
 *
 * Implementation Pattern:
 *   - Use Map or object for children
 *   - Store complete word at terminal node (or boolean flag)
 *   - Traverse character by character
 *
 * -------------------------------------------------------------------
 * 2. DEPTH-FIRST SEARCH (DFS)
 * -------------------------------------------------------------------
 * Description: A graph traversal algorithm that explores as far as possible
 *              along each branch before backtracking.
 *
 * Key Characteristics:
 *   - Recursive or iterative (stack-based)
 *   - Explores fully before moving to next branch
 *   - Natural for backtracking problems
 *
 * When to Use:
 *   - Grid/matrix traversal problems
 *   - Tree/graph exploration
 *   - Pathfinding (when you need to explore all possibilities)
 *   - Problems requiring backtracking
 *   - Connected components
 *
 * Implementation Pattern:
 *   - Base case: invalid state or reached goal
 *   - Process current node
 *   - Recurse to neighbors/children
 *   - Return result
 *
 * -------------------------------------------------------------------
 * 3. BACKTRACKING
 * -------------------------------------------------------------------
 * Description: An algorithmic technique for solving problems recursively by
 *              trying partial solutions and abandoning them ("backtracking")
 *              if they cannot lead to a complete solution.
 *
 * Key Pattern (3 Steps):
 *   1. Make a choice (modify state)
 *   2. Explore recursively
 *   3. Unmake the choice (restore state)
 *
 * When to Use:
 *   - Constraint satisfaction problems (N-Queens, Sudoku)
 *   - Generating all permutations/combinations
 *   - Problems where you need to try options and undo
 *   - Any DFS problem where you modify shared state
 *
 * Implementation Pattern:
 *   state = make_change()
 *   recurse()
 *   undo_change() // critical: restore original state
 *
 * -------------------------------------------------------------------
 * 4. IN-PLACE STATE MARKING
 * -------------------------------------------------------------------
 * Description: Modifying the input data structure to track state (like visited
 *              cells) instead of using a separate data structure.
 *
 * Key Benefits:
 *   - Saves memory (no extra visited array needed)
 *   - Faster access (no lookups in separate structure)
 *   - Cleaner code
 *
 * When to Use:
 *   - Memory-constrained problems
 *   - When you can safely modify input
 *   - When state can be restored after recursion (backtracking)
 *   - Matrix/grid problems with reversible operations
 *
 * Important: Must restore original value after recursion!
 *
 * Implementation Pattern:
 *   const original = board[r][c]
 *   board[r][c] = MARKER  // e.g., '#', null, -1
 *   // ... explore ...
 *   board[r][c] = original  // restore
 *
 * -------------------------------------------------------------------
 * 5. DIRECTION VECTORS
 * -------------------------------------------------------------------
 * Description: Array of [row, column] offsets representing possible moves.
 *              Makes grid traversal code cleaner and more maintainable.
 *
 * Key Benefits:
 *   - Cleaner code: loop instead of 4 separate if statements
 *   - Easier to extend (add diagonals: [1,1], [-1,-1], etc.)
 *   - Less error-prone
 *   - More readable
 *
 * When to Use:
 *   - Grid traversal problems
 *   - Any problem with movement in multiple directions
 *   - 2D matrix problems
 *
 * Common Patterns:
 *   const dirs = [[1,0], [-1,0], [0,1], [0,-1]]  // 4-directional
 *   const dirs = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]  // 8-directional
 *
 * Implementation Pattern:
 *   for (const [dr, dc] of dirs) {
 *     const nr = r + dr, nc = c + dc
 *     if (isValid(nr, nc)) explore(nr, nc)
 *   }
 *
 * -------------------------------------------------------------------
 * 6. BOUNDARY CHECKING
 * -------------------------------------------------------------------
 * Description: Validating array indices are within valid bounds before access.
 *              Critical for preventing out-of-bounds errors.
 *
 * Key Pattern:
 *   if (row >= 0 && row < rows && col >= 0 && col < cols) {
 *     // safe to access
 *   }
 *
 * When to Use:
 *   - Always in grid/matrix problems!
 *   - When indices might go negative or exceed bounds
 *   - Before array/string access in loops
 *
 * Common Checks:
 *   - Array bounds: 0 <= i < length
 *   - Grid bounds: 0 <= r < rows && 0 <= c < cols
 *   - Negative indices
 *
 * -------------------------------------------------------------------
 * 7. PRUNING OPTIMIZATION
 * -------------------------------------------------------------------
 * Description: Eliminating branches of the search tree that cannot lead to
 *              a solution, reducing the search space.
 *
 * Key Benefits:
 *   - Dramatically improves performance
 *   - Reduces unnecessary computations
 *   - Can turn exponential time into polynomial time
 *
 * When to Use:
 *   - Search problems where branches can be eliminated
 *   - When you can detect impossible paths early
 *   - Optimization problems
 *   - After finding a solution (like removing completed words from trie)
 *
 * Types of Pruning:
 *   - Early termination: stop if condition met
 *   - Invalid path removal: remove impossible branches
 *   - Duplicate elimination: skip already explored states
 *
 * Implementation Pattern (this problem):
 *   if (node.children.size === 0) {
 *     parent.children.delete(char)  // remove completed leaf
 *   }
 *
 * -------------------------------------------------------------------
 * 8. DEDUPLICATION
 * -------------------------------------------------------------------
 * Description: Ensuring unique results when the same solution can be reached
 *              through multiple paths or found multiple times.
 *
 * Key Benefits:
 *   - Correct output (no duplicates)
 *   - Better performance (don't process same item twice)
 *
 * When to Use:
 *   - When results should be unique
 *   - When same solution can be reached multiple ways
 *   - Output uniqueness requirements
 *
 * Common Approaches:
 *   - Mark as processed: set flag/null after finding (used here)
 *   - Use Set for results: automatically handles duplicates
 *   - Track visited states
 *
 * Implementation Pattern (this problem):
 *   if (node.word) {
 *     results.push(node.word)
 *     node.word = null  // prevent finding same word again
 *   }
 *
 * -------------------------------------------------------------------
 * 9. EARLY RETURN / GUARD CLAUSES
 * -------------------------------------------------------------------
 * Description: Exiting function early when conditions indicate no solution
 *              is possible, avoiding unnecessary computation.
 *
 * Key Benefits:
 *   - Clearer code flow
 *   - Better performance
 *   - Reduces nesting (flatter code)
 *
 * When to Use:
 *   - Validation at function start
 *   - When you can detect failure early
 *   - Base cases in recursion
 *   - Invalid state detection
 *
 * Common Patterns:
 *   if (!condition) return
 *   if (invalid) return false
 *   if (baseCase) return value
 *
 * Implementation Pattern:
 *   function dfs(...) {
 *     if (invalid) return           // early exit
 *     if (baseCase) return result    // base case
 *     // ... main logic ...
 *   }
 *
 * -------------------------------------------------------------------
 * COMBINATION PATTERNS
 * -------------------------------------------------------------------
 *
 * These techniques often work together:
 *
 * DFS + Backtracking + In-place Marking:
 *   - Use DFS to explore, backtrack to restore state, mark in-place
 *
 * Trie + DFS:
 *   - Use Trie to guide DFS exploration (only explore valid prefixes)
 *
 * Direction Vectors + Boundary Checking:
 *   - Always check boundaries when using direction vectors
 *
 * Pruning + Deduplication:
 *   - Prune after processing, deduplicate to avoid repeats
 *
 * -------------------------------------------------------------------
 * WHEN TO COMBINE TECHNIQUES
 * -------------------------------------------------------------------
 *
 * Use this combination for:
 *
 * Word Search / Boggle problems:
 *   → Trie + DFS + Backtracking + Direction Vectors + Boundary Checking
 *
 * Grid Pathfinding:
 *   → DFS/BFS + Direction Vectors + Boundary Checking + In-place Marking
 *
 * Constraint Satisfaction:
 *   → Backtracking + DFS + Pruning + Deduplication
 *
 * String Matching Problems:
 *   → Trie + DFS/Iteration + Early Returns
 *
 * ===================================================================
 */
