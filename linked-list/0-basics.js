function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

const list = new Node(1, new Node(2, new Node(3, new Node(4))));

console.log(list);

const rest = list.next;

console.log(rest);

list.next = new Node(5, rest);

console.log(list);

let node = new Node(1, new Node(2, new Node(3)));
let twoNode = node.next; // 2 -> 3
node.next = node.next.next; // 3 -> null
twoNode.next = node; // 2 ->

// 2 -> 1 -> 3
