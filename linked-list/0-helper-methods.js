/*
Coding Drills: Map/Reduce Variations on Linked Lists

1. function reduce(head, accumulator, initialVal) - returns single value
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

2. function map(head, mapper) - returns new list

3. function any(head, test) - returns true if at least one value passes the test function

4. function all(head, test) - returns true if ALL of the values in the list pass the test function

BONUS: function filter(head, test) - modifies list and returns new head

*/
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

// Create a new linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

function reduce1(head, accumulator, accmulation) {
  if (!head) {
    return accmulation;
  }
  accmulation = accumulator(head.data, accmulation);
  return reduce1(head.next, accumulator, accmulation);
}

function accumulator(currentValue, accmulation) {
  return currentValue * accmulation;
}

//Test cases
console.log(reduce1(linkedList.head, accumulator, 1));

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

function sumAccumulator(accmulation, currentValue) {
  return accmulation + currentValue;
}
// reduce(head, sumAccumulator, initialVal)

function all(head, test) {
  if (head == null) {
    return true;
  }

  if (test(head.data)) {
    return all(head.next, test);
  } else {
    return false;
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

console.log('starting all()');
console.log(all(linkedList, isOdd) == false ? 'Correct' : 'incorrect');

const oddList = new LinkedList();

// Add nodes to the linked list
oddList.add(1);
oddList.add(3);
oddList.add(5);
console.log(all(oddList.head, isOdd) == true ? 'Correct' : 'incorrect');
console.log('end of all()');

// 3. function any(head, test) - returns true if at least one value passes the test function

const anyLL = new LinkedList();
anyLL.add(2);
anyLL.add(2);
anyLL.add(2);
anyLL.add(2);

function any(head, test) {
  // current is head
  // while there's a node
  // check if current's value matches test
  // return true if it does
  // otherwise current is the next node (current.next)

  let current = head;

  while (current) {
    if (test(current.data)) {
      return true;
    } else {
      current = current.next;
    }
  }

  return false;
}

console.log('any iterative', any(anyLL.head, isOdd));

function anyRec(head, test) {
  if (head === null) {
    return false;
  }

  if (test(head.data)) {
    return true;
  } else {
    return anyRec(head.next);
  }
}

console.log('any recursive', any(anyLL.head, isOdd));

function myMap(head, mapper) {
  let arr = [];

  if (head == null) {
    return arr;
  }

  let curr = head;

  while (curr) {
    arr.push(mapper(curr.data));
    curr = curr.next;
  }
  /*
  setup an array to store results
  while head is not none:
    push to the array of the callback function of mapper
    go to next until head is null
  return the result array
  */

  return arr;
}

const myValue = (value) => {
  return value % 2 == 1;
};
console.log('mapping value with console.log', myMap(linkedList.head, myValue));
