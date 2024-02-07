/*
Return the kth value of the fibonacci sequence

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */

function fibonacciArray(k) {
  const array = [];

  for (let i = 0; i < k; i++) {
    if (array.length === 0) {
      array.push(0);
      continue;
    }

    if (array.length === 1) {
      array.push(1);
      continue;
    }

    const nextValue = array[i - 1] + array[i - 2];

    array.push(nextValue);
  }

  return array[array.length - 1];
}

console.log(fibonacciArray(7));

function fibonacciVariable(k) {
  let valueOne = 0;
  let valueTwo = 1;

  if (k === 0) {
    return 0;
  }

  if (k === 1) {
    return valueOne;
  }

  if (k === 2) {
    return valueTwo;
  }

  for (let i = 0; i < k - 2; i++) {
    const temp = valueOne + valueTwo;

    valueOne = valueTwo;
    valueTwo = temp;
  }

  return valueTwo;
}

console.log('Bam k = 0 -> 0', fibonacciVariable(0));
console.log('Bam k = 5 -> 3', fibonacciVariable(5));
console.log('Bam k = 9 -> 21', fibonacciVariable(9));

//->// Return the kth number of an alternative sequence that starts with 1, 1, 1 and each subsequent number is the sum of the previous THREE elements. (1, 1, 1, 3, 5, 9, 17...)

function fibonacciAlt(k) {
  let valueOne = 1;
  let valueTwo = 1;
  let valueThree = 1;

  if (k === 0) {
    return 0;
  }

  if (k === 1) {
    return valueOne;
  }

  if (k === 2) {
    return valueTwo;
  }

  if (k === 3) {
    return valueThree;
  }

  for (let i = 0; i < k - 3; i++) {
    const temp = valueOne + valueTwo + valueThree;

    valueOne = valueTwo;
    valueTwo = valueThree;
    valueThree = temp;
  }

  return valueThree;
}

console.log(fibonacciAlt(7));

// TODO
// Even Fibonacci Sequence. In this sequence, round each element to an even number without effecting the overall sequence.
// 1, 1, 2, 3, 5, 8, 14...
// 2, 2, 2, 4, 6, 8, 14, 22...
// Notice that the first two elements get rounded to 2, but the following element is based on the original value, not the rounded values.

// Delayed Fibonacci Sequence. This sequence starts with 1, 1, 1, and then each subsequent number is the sum of the element 2 before and 3 before it (skipping the element right before it).
// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16...

function delayedFibonacci(k) {
  let valueOne = 1;
  let valueTwo = 1;
  let valueThree = 1;

  if (k === 0) {
    return 0;
  }

  if (k === 1) {
    return valueOne;
  }

  if (k === 2) {
    return valueTwo;
  }

  if (k === 3) {
    return valueThree;
  }

  for (let i = 0; i < k - 3; i++) {
    const temp = valueOne + valueTwo;

    valueOne = valueTwo;
    valueTwo = valueThree;
    valueThree = temp;
  }

  return valueThree;
}

console.log(delayedFibonacci(8));
