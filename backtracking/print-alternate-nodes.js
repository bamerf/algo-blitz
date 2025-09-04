/*

'''
Write a program to recursively alternate printing nodes.  You are not allowed to use loop constructs. You can assume that the head node should always be printed first. To simplify testing, return a string.
 

EXAMPLE(S)
n1 = 1 -> 2 -> 3
printAlternate(n1) == "1 -> 3"
 

FUNCTION SIGNATURE
function printAlternate(node) {}
def printAlternate(node: Node) -> str:
'''

*/

function printAlternate(node, frequency, offset, count = 0) {
  const current = node;

  if (!current) {
    return;
  }

  if (count % frequency === 0 && offset <= 0) {
    console.log(current.value);
  }

  printAlternate(node.next, frequency, offset - 1, count + 1);
}

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {},
            },
          },
        },
      },
    },
  },
};

printAlternate(list, 1, 3, 0);
