/*
'''
❓ PROMPT
You're practicing the Faro shuffle in cardistry (https://www.youtube.com/shorts/UPv0vH-PlQo). You start with red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.

You build a machine that accepts a deck of cards to automatically determine if a deck is a perfect interweave. Currently, it can interpret the card's color; you need to write the algorithm.

Example(s)
isPerfectWeave(["B", "B", "R", "B", "R"]) is false
isPerfectWeave(["R", "B", "R", "B", "B"]) is false
isPerfectWeave(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]) is true
 

🔎 EXPLORE
List your assumptions & discoveries:

case sensitive
 

Insightful & revealing test cases:

empty array
interweaving corectly
interweaving incorrectly

 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(1)
Space: O(1)
 

📆 PLAN
Outline of algorithm #:
iterate through the array
item and next item should not be the same
 

🛠️ IMPLEMENT
function isPerfectWeave(deck) {
def isPerfectWeave(deck: list[str]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isPerfectWeave(deck) {
  let perfect;
  deck.forEach((item, index) => {
    if (index + 1 !== deck.length && perfect !== false) {
      perfect = item !== deck[index + 1];
    }
  });

  return perfect;
}

// function isPerfectWeave(deck) {
//   for (let i = 1; i < deck.length; i++)
//     if (deck[i - 1] === deck[i])
//       return false

//   return true
// }

console.log(isPerfectWeave(['R', 'R', 'R', 'R', 'R']) == false);
console.log(isPerfectWeave(['R', 'B', 'R', 'R', 'R']) == false);
console.log(isPerfectWeave(['B', 'B', 'R', 'B', 'R']) == false);
console.log(isPerfectWeave(['R', 'B', 'R', 'B', 'B']) == false);
console.log(isPerfectWeave(['B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R']));
console.log(
  isPerfectWeave(['R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B'])
);
