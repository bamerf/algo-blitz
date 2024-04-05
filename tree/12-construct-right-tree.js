/*
Q. Construct a right child only tree from a given array.

Input: [1, 2, 3]
Output: 
          1
            \
              2
                \
                 3

https://app.codesignal.com/test/zNuGMivwmLnziy4p2/question/8kcf4WSfNpip3XSHP
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(array) {
  if (array.length === 0) return null;

  let root = new Tree(array[0]);
  let currentNode = root;

  for (let i = 1; i < array.length; i++) {
    let newNode = new Tree(array[i]);
    currentNode.right = newNode;
    currentNode = newNode;
  }

  return root;
}
