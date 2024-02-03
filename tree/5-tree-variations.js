/*
1. Count the number of times a target value is in the binary tree
function count(root, target)
*/

function countTarget(root, target) {
  if (!root) {
    return 0;
  }

  const value = root.value === target ? 1 : 0;

  return (
    value + countTarget(root.left, target) + countTarget(root.right, target)
  );
}

/*
2. Count the number of items in the tree that satisfy a predicate function
function count(root, predicate)
function match(value) // predicate signature, returns true or false
*/

function countTargetPredicate(root, predicate) {
  if (!root) {
    return 0;
  }

  const value = predicate(root.value) ? 1 : 0;

  return (
    value +
    countTargetPredicate(root.left, predicate) +
    countTargetPredicate(root.right, predicate)
  );
}

/*
3. Find the most frequent value in a binary tree
function findMostFrequent(root)
*/

function helper(root) {
  if (!root) {
    return null;
  }

  // (map[value] || 0) + 1;

  if (map[root.value]) {
    map[root.value]++;
  } else {
    map[root.value] = 1;
  }
  if (map[root.value] > mostFrequentValue) {
    mostFrequentKey = root.value;
    mostFrequentValue = map[root.value];
  }
  helper(root.left);
  helper(root.right);
}

function countMostFrequent(root) {
  let map = {};
  let mostFrequentKey = -1;
  let mostFrequentValue = -1;
  helper(root);
  return mostFrequentKey;
}

/*
4. Find the most frequent value in a binary tree that matches a predicate.
function findMostFrequent(root, predicate)
function match(value) // predicate signature, returns true or false
*/

/*
5. Find the smallest positive value in a binary tree
function smallestPositive(root)
*/

/*
6. tree forEach
*/

function treeForEach(root, fn) {
  if (!root) {
    return null;
  }

  fn(root.value);
  tree(root.left, predicate);
  tree(root.right, predicate);
}
