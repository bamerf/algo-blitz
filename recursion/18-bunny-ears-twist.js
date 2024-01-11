/*
'''
❓ PROMPT
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

Example(s)
bunnyEarsTwist(2) == 5
bunnyEarsTwist(3) == 7
bunnyEarsTwist(5) == 12
 

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
 

🛠️ IMPLEMENT
function bunnyEarsTwist(bunnies) {
def bunnyEarsTwist(bunnies: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function bunnyEarsTwist(bunnies, ears = 0) {
  if (bunnies === 0) {
    return ears;
  }

  const bunnyEars = bunnies % 2 === 0 ? 3 : 2;

  return bunnyEarsTwist(bunnies - 1, ears + bunnyEars);
}

console.log(bunnyEarsTwist(12) == 30);
console.log(bunnyEarsTwist(10) == 25);
console.log(bunnyEarsTwist(5) == 12);
console.log(bunnyEarsTwist(3) == 7);
console.log(bunnyEarsTwist(2) == 5);
console.log(bunnyEarsTwist(1) == 2);
console.log(bunnyEarsTwist(0) == 0);
