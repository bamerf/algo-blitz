/**
 
Given the root of a binary tree, return true if the given tree is immediately distinct, or false otherwise. A binary tree is immediately distinct if no parent node in the tree has a child node with the same value as itself.
For example, if the parent node = 1 and it has a child node of the same value 1, this would not be an immediately distinct tree. On the other hand, if no nodes have a child node with the same value as themselves, this is an immediately distinct tree.
Example(s)
           1*
       1*      2
     3   4   _   6
should return false

           1
       2       2
    5    9   _   _    
should return true
 
 */

// Technique #1: TREE DATA STRUCTURE - Binary tree node definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeIsImmediatelyDistinct(root) {
  // Technique #2: DFS - Depth-First Search function for tree traversal
  // Technique #6: TREE TRAVERSAL - Using pre-order traversal (check node before children)
  function dfs(node, parentValue) {
    // Technique #3: EARLY RETURN - Base case: null node means valid path
    if (!node) return true;

    // Technique #3: EARLY RETURN - Invalid case: parent and child have same value
    if (node.val === parentValue) {
      return false;
    }

    // Technique #2: DFS - Recursively traverse left and right subtrees
    // Technique #4: PARAMETER PASSING - Pass current node value as parent to children
    // Technique #5: BOOLEAN LOGIC - Both subtrees must be valid (short-circuit evaluation)
    return dfs(node.left, node.val) && dfs(node.right, node.val);
  }

  // Technique #2: DFS - Start DFS from root (no parent, so pass null)
  return dfs(root, null);
}

/**
 * ===================================================================
 * TECHNIQUES REFERENCE GUIDE
 * ===================================================================
 *
 * This section documents all the algorithmic techniques used in this
 * solution. Reference this when encountering similar problems.
 *
 * -------------------------------------------------------------------
 * 1. TREE DATA STRUCTURE
 * -------------------------------------------------------------------
 * Description: A hierarchical data structure with nodes connected by edges.
 *              Binary trees have at most two children per node (left and right).
 *
 * Key Characteristics:
 *   - Root node: topmost node (no parent)
 *   - Leaf nodes: nodes with no children
 *   - Parent-child relationships: each node (except root) has one parent
 *   - Subtrees: left and right subtrees are trees themselves
 *
 * When to Use:
 *   - Hierarchical data representation
 *   - Problems involving parent-child relationships
 *   - Problems that can be broken down recursively
 *   - Search, traversal, and validation problems
 *
 * Common Operations:
 *   - Traversal: visit all nodes (DFS, BFS)
 *   - Search: find specific nodes
 *   - Validation: check tree properties
 *
 * -------------------------------------------------------------------
 * 2. DEPTH-FIRST SEARCH (DFS) / RECURSION
 * -------------------------------------------------------------------
 * Description: A tree traversal algorithm that explores as deep as possible
 *              along each branch before backtracking. Implemented recursively
 *              by calling the function on child nodes.
 *
 * Key Characteristics:
 *   - Recursive: function calls itself
 *   - Explores one path completely before moving to next
 *   - Natural fit for tree problems
 *   - Uses call stack (implicit stack)
 *
 * When to Use:
 *   - Tree/graph traversal problems
 *   - Problems that can be solved recursively
 *   - Validating tree properties
 *   - Problems requiring visiting all nodes
 *   - Parent-child relationship checks
 *
 * Implementation Pattern:
 *   function dfs(node, ...params) {
 *     // Base case: handle null/leaf nodes
 *     if (!node) return baseValue;
 *
 *     // Process current node
 *     // Recurse on children
 *     return combine(dfs(node.left, ...), dfs(node.right, ...));
 *   }
 *
 * Time Complexity: O(n) where n = number of nodes
 * Space Complexity: O(h) where h = height (for call stack)
 *
 * -------------------------------------------------------------------
 * 3. EARLY RETURN / GUARD CLAUSES
 * -------------------------------------------------------------------
 * Description: Exiting function early when conditions indicate the result
 *              is already determined, avoiding unnecessary computation.
 *
 * Key Benefits:
 *   - Clearer code flow
 *   - Better performance (avoid unnecessary recursion)
 *   - Reduces nesting (flatter code)
 *   - Handles edge cases explicitly
 *
 * When to Use:
 *   - Base cases in recursion (null nodes, empty structures)
 *   - Validation at function start
 *   - When you can detect failure early
 *   - Invalid state detection
 *
 * Common Patterns:
 *   if (!node) return true;        // Base case
 *   if (invalid) return false;      // Early failure
 *   if (condition) return value;   // Early success
 *
 * Implementation Pattern:
 *   function dfs(node) {
 *     if (!node) return baseCase;    // Handle null
 *     if (invalid) return false;     // Early exit
 *     // ... main logic ...
 *   }
 *
 * -------------------------------------------------------------------
 * 4. PARAMETER PASSING / STATE TRACKING
 * -------------------------------------------------------------------
 * Description: Passing additional information down the recursion tree to
 *              track state or context needed for validation/computation.
 *
 * Key Benefits:
 *   - Maintains context across recursive calls
 *   - Enables parent-child relationship checks
 *   - Tracks path information
 *   - No need for global variables
 *
 * When to Use:
 *   - Need to compare current node with parent/ancestor
 *   - Need to track path information
 *   - Need to pass constraints down the tree
 *   - Problems requiring parent-child comparisons
 *
 * Common Patterns:
 *   - Pass parent value: dfs(node, parentValue)
 *   - Pass path: dfs(node, path)
 *   - Pass constraints: dfs(node, min, max)
 *   - Pass accumulator: dfs(node, sum)
 *
 * Implementation Pattern:
 *   function dfs(node, parentValue) {
 *     // Compare node.val with parentValue
 *     // Pass node.val as new parentValue to children
 *     return dfs(node.left, node.val) && dfs(node.right, node.val);
 *   }
 *
 * -------------------------------------------------------------------
 * 5. BOOLEAN LOGIC / SHORT-CIRCUIT EVALUATION
 * -------------------------------------------------------------------
 * Description: Using logical operators (&&, ||) to combine results from
 *              multiple recursive calls. Short-circuit evaluation stops
 *              early when result is determined.
 *
 * Key Characteristics:
 *   - && (AND): returns false immediately if any operand is false
 *   - || (OR): returns true immediately if any operand is true
 *   - Efficient: doesn't evaluate unnecessary operands
 *
 * When to Use:
 *   - Combining results from multiple recursive calls
 *   - Validation problems (all conditions must be true)
 *   - Search problems (any path can be true)
 *   - When you need to check all subtrees
 *
 * Common Patterns:
 *   return dfs(left) && dfs(right);   // Both must be true
 *   return dfs(left) || dfs(right);   // Either can be true
 *   return condition && dfs(node);    // Conditional recursion
 *
 * Implementation Pattern:
 *   // Check if both subtrees satisfy condition
 *   return dfs(node.left, ...) && dfs(node.right, ...);
 *
 * -------------------------------------------------------------------
 * 6. TREE TRAVERSAL
 * -------------------------------------------------------------------
 * Description: Visiting all nodes in a tree in a systematic order.
 *              This problem uses pre-order traversal (check node, then children).
 *
 * Traversal Types:
 *   - Pre-order: Process node → Left → Right
 *   - In-order: Left → Process node → Right
 *   - Post-order: Left → Right → Process node
 *   - Level-order (BFS): Level by level
 *
 * When to Use Each:
 *   - Pre-order: When you need parent info before children (this problem!)
 *   - In-order: Binary search tree operations
 *   - Post-order: When you need children info before parent
 *   - Level-order: When you need level-by-level processing
 *
 * Implementation Pattern (Pre-order):
 *   function traverse(node) {
 *     if (!node) return;
 *     process(node);           // Process current
 *     traverse(node.left);    // Then left
 *     traverse(node.right);   // Then right
 *   }
 *
 * -------------------------------------------------------------------
 * COMBINATION PATTERNS
 * -------------------------------------------------------------------
 *
 * These techniques often work together:
 *
 * DFS + Early Return:
 *   - Use DFS to traverse, early return to optimize
 *
 * Parameter Passing + DFS:
 *   - Pass context down recursion tree during DFS
 *
 * Boolean Logic + DFS:
 *   - Combine subtree results using && or ||
 *
 * Tree Traversal + Validation:
 *   - Traverse tree while checking properties
 *
 * -------------------------------------------------------------------
 * WHEN TO COMBINE TECHNIQUES
 * -------------------------------------------------------------------
 *
 * Use this combination for:
 *
 * Tree Validation Problems:
 *   → DFS + Early Return + Parameter Passing + Boolean Logic
 *
 * Parent-Child Relationship Checks:
 *   → DFS + Parameter Passing (pass parent value)
 *
 * Tree Property Validation:
 *   → DFS + Boolean Logic (combine subtree results)
 *
 * Path Problems in Trees:
 *   → DFS + Parameter Passing (track path/state)
 *
 * -------------------------------------------------------------------
 * PROBLEM-SPECIFIC NOTES
 * -------------------------------------------------------------------
 *
 * This problem checks if a tree is "immediately distinct" - meaning no
 * parent has a child with the same value.
 *
 * Key Insights:
 *   - Need to compare each node with its parent
 *   - Pass parent value down the recursion
 *   - Root has no parent (pass null)
 *   - Both subtrees must be valid (use &&)
 *   - Can return early if violation found
 *
 * Algorithm Flow:
 *   1. Start at root (parent = null)
 *   2. For each node, check if node.val === parentValue
 *   3. If match found, return false immediately
 *   4. Recursively check left and right subtrees
 *   5. Both subtrees must be valid (&&)
 *   6. Return true only if entire tree is valid
 *
 * ===================================================================
 */
