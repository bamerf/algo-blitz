/*
'''
Recursively Print Triangle

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.
 

EXAMPLE(S)
printXTriangle(5)
XXXXX
 XXX
  X

printTriangle([a,b,c,d,e])
abcde
 bcd
  c
 

FUNCTION SIGNATURE
def printXTriangle(k: int) -> None:
def printTriangle(array: list[str]) -> None:
'''

xxxxx
 xxx
  x
*/

function printXTriangle(k, space = 0) {
  if (k < 1) return;

  console.log(' '.repeat(space / 2) + 'x'.repeat(k) + ' '.repeat(space / 2));

  printXTriangle(k - 2, space + 2);
}

// function printXTriangle(k, space = 0) {
//   if (k < 1) return

//   console.log(' '.repeat(space / 2) + 'x'.repeat(k))

//   printXTriangle(k - 2, space + 1)
// }

printXTriangle(5);
