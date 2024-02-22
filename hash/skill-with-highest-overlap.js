/*
'''
❓ PROMPT
Given an input dictionary mapping from the name of Fellows to their numerical skill rating, return the skill rating with the highest number of Fellows.

Example(s)
{"oliver": 3, "pixel": 1, "pinky": 3} => 3

- new map counting the occurance of each rating
- loop through the map
  - if in map, increment
  - set item as 1

- loop through new map
- keep track of highest

 {"oliver": 3, "pixel": 3, "pinky": 3} => 3
 {"oliver": 3, "pixel": 1, "pinky": 1} => 1

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function highestSkillOverlap(fellowSkills) {
def highestSkillOverlap(fellowSkills: dict) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

{"oliver": 3, "pixel": 1, "pinky": 3} => 3

- new map counting the occurance of each rating
- loop through the map
  - if in map, increment
  - set item as 1

- loop through new map
- keep track of highest
*/

function highestSkillOverlap(fellowSkills) {
  const ratings = {};

  for (let fellow in fellowSkills) {
    const rating = fellowSkills[fellow];
    if (!ratings[rating]) {
      ratings[rating] = 1;
    } else {
      ratings[rating] += 1;
    }
  }

  console.log(ratings);

  let highest = -Infinity;

  for (let rating in ratings) {
    const occurance = ratings[rating];
    if (occurance > highest) {
      highest = rating;
    }
  }

  return highest;
}

const data = { oliver: 3, pixel: 1, pinky: 1 };

console.log(highestSkillOverlap(data));
