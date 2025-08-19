/*
'''
Print all K-length increasing sequences

Given two positive integers *seqLen* and *upperBound*, print all increasing sequences of length *seqLen* such that the elements in every sequence are from the first *upperBound* natural numbers. 

You can assume *seqLen* will be positive and <= *upperBound*. You may want to write a helper method to recurse easier.
 

EXAMPLE(S)
printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

printSeq(seqLen=3, upperBound=4)
[1, 2, 3]
[1, 2, 4]
[1, 3, 4]
[2, 3, 4]

printSeq(seqLen=1, upperBound=5)
[1]
[2]
[3]
[4]
[5]
 

FUNCTION SIGNATURE
def printSeq(seqLen: int, upperBound: int):
'''
*/

function printSeq(seqLen, upperBound) {
  const array = [];

  helper(array, 1, seqLen, upperBound);
}

function helper(currentArray, startNumber, seqLen, upperBound) {
  if (currentArray.length === seqLen) {
    console.log(currentArray);
    return;
  }

  for (let num = startNumber; num <= upperBound; num++) {
    currentArray.push(num);
    helper(currentArray, num + 1, seqLen, upperBound);
    currentArray.pop();
  }
}

// 🧪 TEST CASES
console.log('=== Test Case 1: printSeq(2, 3) ===');
console.log('Expected: [1,2], [1,3], [2,3]');
console.log('Actual:');
printSeq(2, 3);

console.log('\n=== Test Case 2: printSeq(1, 3) ===');
console.log('Expected: [1], [2], [3]');
console.log('Actual:');
printSeq(1, 3);

console.log('\n=== Test Case 3: printSeq(3, 3) ===');
console.log('Expected: [1,2,3]');
console.log('Actual:');
printSeq(3, 3);

console.log('\n=== Test Case 4: printSeq(1, 1) ===');
console.log('Expected: [1]');
console.log('Actual:');
printSeq(1, 1);

console.log('\n=== Test Case 5: printSeq(2, 4) ===');
console.log('Expected: [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]');
console.log('Actual:');
printSeq(2, 4);
