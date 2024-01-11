/*
'''
❓ PROMPT
Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

Example(s)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False
 

🔎 EXPLORE
List your assumptions & discoveries:

fellows are always even numbers
 

Insightful & revealing test cases:

fellows with 0 skill
single match -> false
all matching -> true
two pairs with same kills -> {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5, "ali": 5, "james": 5}
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: iterate through the object, push each value into a set. check if the size of set is an even number
Time: O(N)
Space: O(N)


 

📆 PLAN
Outline of algorithm #: 

- initialize a set
- iterate through the object
- add to the set the value of each item
- return true if size of set equals and even number
- otherwise return false
 

🛠️ IMPLEMENT
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function canMatchFellows(skillMap) {
//   const dict = {};

//   for (const fellow in skillMap) {
//     if (skillMap[fellow] in dict) {
//       dict[skillMap[fellow]] += 1;
//     } else {
//       dict[skillMap[fellow]] = 1;
//     }
//   }

//   for (const count in dict) {
//     if (dict[count] % 2 === 0) {
//       return true;
//     }

//     return false;
//   }
// }

function canMatchFellows(skillMap) {
  let skillSet = new Set();
  for (let fellow in skillMap) {
    let skill = skillMap[fellow];
    if (skillSet.has(skill)) {
      skillSet.delete(skill);
    } else {
      skillSet.add(skill);
    }
  }
  return skillSet.size == 0;
}

let skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap) == true);

skillMap = { oliver: 3, pixel: 4, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 3 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 3, tobey: 3 };
console.log(canMatchFellows(skillMap) == true);

console.log(canMatchFellows({ oliver: 1 }) == false);

console.log(canMatchFellows({}) == true);
