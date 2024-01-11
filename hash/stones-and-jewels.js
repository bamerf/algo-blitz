/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

all same value
empty string
single match
multiple matches
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)2
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

split the jewels string
create a set from the split array
iterate through stones
if stone doesn't exist add
return length of set
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const countJewels = (jewels, stones) => {
  const set = new Set(jewels);
  let count = 0;

  for (char in stones) {
    if (set.has(stones[char])) {
      count += 1;
    }
  }

  return count;
};

console.log(countJewels('aA', 'aAAbbbb'));
console.log(countJewels('', ''));
console.log(countJewels('a', 'aAAbbbb'));
console.log(countJewels('aAbB', 'aAAbbbb'));
