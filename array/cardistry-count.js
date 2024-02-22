/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.

You build a machine that accepts a deck of cards to automatically determine the size of your biggest mistake after the merge. Currently, it can interpret the card's color; you need to write the algorithm.

Example(s)
biggestMistake(["B", "B", "R", "B", "R"]) is 2
biggestMistake(["R", "B", "R", "B", "B"]) is 2
biggestMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) is 1

- have a switch that toggles between B and R
- colors = {
  red: red
}

 

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
function biggestMistake(deck) {
def biggestMistake(deck: list[str]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// biggestMistake(["B", "B", "R", "B", "R"]) is 2
// biggestMistake(["R", "B", "R", "B", "B"]) is 2
// biggestMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) is 1

const foo = ['R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R'];

function biggestMistake(deck) {
  let count = 0;

  deck.forEach((color, index) => {
    if (index !== 1) {
      if (
        (color === 'B' && deck[index + 1] !== 'R') ||
        (color === 'R' && deck[index + 1] !== 'B')
      ) {
        count++;
      }
    }
  });

  return count;
}

console.log(biggestMistake(foo));
