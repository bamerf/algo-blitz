/*
'''
❓ PROMPT
We have a number of bunnies, each with two big floppy ears. We want to compute the total number of ears across all the bunnies recursively, without loops or multiplication.

Example(s)
bunnyEars(3) == 6
bunnyEars(5) == 10
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:

recurse and add 2
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function bunnyEars(bunnies) {
def bunnyEars(bunnies: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function bunnyEars(bunnies, ears = 0) {
  if (bunnies === 0) {
    return ears;
  }

  return bunnyEars(bunnies - 1, ears + 2);
}

console.log(bunnyEars(12) === 24);
console.log(bunnyEars(10) === 20);
console.log(bunnyEars(5) === 10);
console.log(bunnyEars(3) === 6);
console.log(bunnyEars(2) === 4);
console.log(bunnyEars(1) === 2);
console.log(bunnyEars(0) === 0);
