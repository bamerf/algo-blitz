/*
'''
❓ PROMPT
You're a bartender and have to look out for your patrons - you don't want them to drink too much. Assume everyone has the same drink, and everyone has the same set amount of "allowed servings".

Given an array of patrons (denoted by their names, eg: Adrian) and an integer value representing "allowed servings", return True if someone attempts to go over the allowed number of servings per person.

Otherwise, False if no one drinks too much.

Can you think of any data structures that might help?

Example(s)
patrons = ['Joe', 'Bart', 'Larry', 'Joe', 'Carl', 'Doug', 'Joe']
allowedServings = 2

returns True because Joe went over the limit.
 

🔎 EXPLORE
List your assumptions & discoveries:

- capitalized
 

Insightful & revealing test cases:

- empty array -> false
- no one goes above limit -> false
- multiple people go above limit -> true
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

- initialize a dict
- iterate through the array
  - if person doesn't exist in dict, add them as key and 1 as value
  - if exist and value greater than allowed return true
  - if exist and value less than allowed increament value

- retrun false

🛠️ IMPLEMENT
function limitedServings(patrons, allowedServings) {
def limitedServings(patrons: list[str], allowedServings: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function limitedServings(patrons, allowedServings) {
  const dict = {};

  for (const person of patrons) {
    if (!dict[person]) {
      dict[person] = 1;
    }

    if (dict[person] && dict[person] > allowedServings) {
      return true;
    }

    dict[person] += 1;
  }

  return false;
}

console.log(limitedServings([], 3) === false);
console.log(
  limitedServings(['Joe', 'Bart', 'Larry', 'Joe', 'Carl', 'Doug', 'Joe'], 2) ===
    true
);
console.log(limitedServings(['Joe', 'Joe'], 3) === false);
console.log(limitedServings(['Joe', 'Joe', 'Adrian', 'Adrian'], 3) === false);
console.log(limitedServings(['Adrian', 'Bart', 'Carl', 'Doug'], 1) === false);
console.log(limitedServings(['Adrian', 'Bart', 'Carl'], 0) === true);
