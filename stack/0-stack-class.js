/*
'''
Implement a basic stack class using an array as the underlying storage. Stacks have two critical methods, push() and pop() to add and remove an item from the stack, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the stack. All of these methods should run in O(1) time!

Remember, a stack is a last-in, first-out data structure!

Using an array is the simplest way to implement a stack. If you're working in a language that doesn't automatically resize arrays as needed, you might need to do some extra work if your stack runs out of space!
 

EXAMPLE(S)
stack = new ArrayStack()
stack.size() == 0
stack.push(2)
stack.push(3)
stack.size() == 2
stack.pop() == 3
stack.size() == 1
stack.pop() ==2
 
'''
*/

class ArrayStack {
  // initialize the stack to be empty
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.arr = new Array(this.capacity);
    this.length = 0;
  }

  push(newValue) {
    if (this.size() == this.capacity) {
      this.arr = this.arr.concat(new Array(this.capacity)); // [ our current array, empty empty empty]
      this.capacity *= 2;
    }
    this.arr[this.length] = newValue;
    this.length++;
  }

  pop() {
    // Removes the top value from the stack and returns it
    if (this.length === 0) {
      return 'empty stack';
    } else {
      const variable = this.arr[this.length - 1];
      this.arr[this.length - 1] = undefined;
      this.length--;
      return variable;
    }
  }

  size() {
    // returns the current size of the stack
    return this.length;
  }
}

const stack = new ArrayStack();
console.log(stack.size());
console.log(stack.pop());
stack.push(1);
stack.push(2);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());

const stack2 = new ArrayStack(3);
stack2.push(3);
stack2.push(4);
stack2.push(5);
stack2.push(6);
console.log(stack2.pop() == 6);
console.log(stack2.capacity == 6);
