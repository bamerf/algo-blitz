const util = require('util');

const EMPTY_LIST = null;

class Node {
  // Helper method to generate a linked list from an array
  static fromArray(array) {
    if (array.length === 0) {
      return EMPTY_LIST;
    }

    let [first, ...rest] = array;

    return prepend(first, Node.fromArray(rest));
  }

  constructor(value, next = EMPTY_LIST) {
    this.value = value;
    this.next = next;
  }

  toString() {
    // Use an external function so we can display empty lists as "()"
    // rather than "null"
    return listToString(this);
  }

  // Changes how instances are displayed in the Node console/repl
  // This is like Python's __repr__ magic method and is Node-specific
  [util.inspect.custom]() {
    return this.toString();
  }
}

function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }

  let [first, rest] = unprepend(list);

  return `${first} -> ${listToString(rest)}`;
}

function isEmpty(list) {
  return list === EMPTY_LIST;
}

function isRestEmpty(list) {
  return isEmpty(list) || isEmpty(list.next);
}

function prepend(val, list) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  return new Node(val, list);
}

function unprepend(list) {
  return [list.value, list.next];
}

function add(x, y) {
  return x + y;
}

/**
 * Given a linked list containing numbers, return the sum of its elements
 */
function sum(list) {
  // Case:
  //   List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // Case:
  //   List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);
  // let first = list.value
  // let rest = list.next;

  // return first + sum(rest);
  return add(first, sum(rest));
}

function template(list) {
  if (_____) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  // let first = list.value;
  // let rest = list.next;

  return _____;
}

function multiply(x, y) {
  return x * y;
}

/**
 * Multiply all the numbers in the list
 */
function product(list) {
  if (isEmpty(list)) {
    return 1;
  }

  let [first, rest] = unprepend(list);
  // let first = list.value;
  // let rest = list.next;

  return multiply(first, product(rest));
}

function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

/**
 * Return the largers number in the list
 */
function largest(list) {
  if (isEmpty(list)) {
    return -Infinity;
  }

  // if (isEmpty(list.next)) {
  //   return list.value;
  // }

  let [first, rest] = unprepend(list);

  // At first, feel free to add more logic here
  // We can refactor it into a single function later

  return larger(first, largest(rest));
}

function merge(left, right) {
  if (isEmpty(left)) {
    return right;
  }

  if (isEmpty(right)) {
    return left;
  }

  let [leftFirst, leftRest] = unprepend(left);
  let [rightFirst, rightRest] = unprepend(right);

  if (leftFirst < rightFirst) {
    return prepend(leftFirst, merge(leftRest, right));
  } else {
    return prepend(rightFirst, merge(left, rightRest));
  }
}

let list = Node.fromArray([1, 3, 5, 7, 9]);
let list2 = Node.fromArray([2, 4, 6, 8, 10, 22]);
console.log('list: ', list);
console.log('sum:      ', sum(list));
console.log('product:  ', product(list));
console.log('largest:  ', largest(list));

console.log('merge:', merge(list, list2));
