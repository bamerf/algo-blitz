function findMax(node, currentMax = -Infinity) {
  if (node === null) {
    return currentMax;
  }

  if (node.value > currentMax) {
    return findMax(node.next, node.value);
  } else {
    return findMax(node.next, currentMax);
  }
}

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Test Cases

// Test 1: Basic example from problem statement
// 1 -> 4 -> 5 -> 1 should return 5
const test1 = new ListNode(
  1,
  new ListNode(4, new ListNode(5, new ListNode(1)))
);
console.log(
  'Test 1 (1->4->5->1):',
  findMax(test1) === 5 ? 'PASS' : 'FAIL',
  `Expected: 5, Got: ${findMax(test1)}`
);

// Test 2: Single node
// 1 should return 1
const test2 = new ListNode(1);
console.log(
  'Test 2 (single node):',
  findMax(test2) === 1 ? 'PASS' : 'FAIL',
  `Expected: 1, Got: ${findMax(test2)}`
);

// Test 3: All same values
// 1 -> 1 -> 1 -> 1 should return 1
const test3 = new ListNode(
  1,
  new ListNode(1, new ListNode(1, new ListNode(1)))
);
console.log(
  'Test 3 (all same):',
  findMax(test3) === 1 ? 'PASS' : 'FAIL',
  `Expected: 1, Got: ${findMax(test3)}`
);

// Test 4: Max at end
// 1 -> 1 -> 1 -> 10 -> 1 should return 10
const test4 = new ListNode(
  1,
  new ListNode(1, new ListNode(1, new ListNode(10, new ListNode(1))))
);
console.log(
  'Test 4 (max at end):',
  findMax(test4) === 10 ? 'PASS' : 'FAIL',
  `Expected: 10, Got: ${findMax(test4)}`
);

// Test 5: Our example
// 1 -> 3 -> 20 -> 10 should return 20
const test5 = new ListNode(
  1,
  new ListNode(3, new ListNode(20, new ListNode(10)))
);
console.log(
  'Test 5 (our example):',
  findMax(test5) === 20 ? 'PASS' : 'FAIL',
  `Expected: 20, Got: ${findMax(test5)}`
);

// Test 6: Negative numbers
// -10 -> -1 -> -5 should return -1
const test6 = new ListNode(-10, new ListNode(-1, new ListNode(-5)));
console.log(
  'Test 6 (negatives):',
  findMax(test6) === -1 ? 'PASS' : 'FAIL',
  `Expected: -1, Got: ${findMax(test6)}`
);

// Test 7: Max at beginning
// 100 -> 1 -> 50 should return 100
const test7 = new ListNode(100, new ListNode(1, new ListNode(50)));
console.log(
  'Test 7 (max at start):',
  findMax(test7) === 100 ? 'PASS' : 'FAIL',
  `Expected: 100, Got: ${findMax(test7)}`
);
