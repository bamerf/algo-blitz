/*
'''
❓ PROMPT
We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

Example(s)
triangle(2) == 3
triangle(3) == 6
triangle(5) == 15
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #:

  []
 [][]
[][][]

rows = 2
blocks = 0

until rows are 0
reduce rows
add blocks

🛠️ IMPLEMENT
function triangle(rows) {
def triangle(rows: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

   []
  [][]
 [][][]
[][][][]

#1
rows = 1
blocks = 3
*/

function triangle(rows, blocks = 0) {
  if (rows === 0) {
    return blocks;
  }

  return triangle(rows - 1, blocks + rows);
}

console.log(triangle(12) === 78);
console.log(triangle(7) === 28);
console.log(triangle(6) === 21);
console.log(triangle(5) === 15);
console.log(triangle(4) === 10);
console.log(triangle(3) === 6);
console.log(triangle(2) === 3);
console.log(triangle(1) === 1);
console.log(triangle(0) === 0);
