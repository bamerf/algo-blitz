/*
Write a program to reverse a stack. Eventually, convert all loop constructs to recursive calls. This algorithm is normally implemented iteratively, but this is a thought exercise in thinking recursively about an algorithm and building skill at the craft of code. This exercise will help you understand both the relationships between loops and recursion and also stacks both in the context of the data structure and the call stack.
 

EXAMPLE(S)
stack = []
push(stack, 4)
push(stack, 3)
push(stack, 2)
push(stack, 1)
reverse(stack)
print(stack)

Output: [1,2,3,4]

*/

function push(stack, item) {
  stack.push(item);
}

function reverse(arr) {
  if (arr.length == 0) {
    return;
  }
  let popped_value = arr.pop();

  reverse(arr);

  function unshift(arr, value) {
    if (arr.length == 0) {
      arr.push(value);
      return;
    }

    const popped = arr.pop();

    unshift(arr, value);

    arr.push(popped);
  }

  unshift(arr, popped_value);
}

let stack = [];
push(stack, 5);
push(stack, 3);
push(stack, 2);
push(stack, 1);
reverse(stack);

console.log(stack);
