/*
   
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.
You build a machine that accepts a deck of cards to automatically determine the size of your biggest mistake after the merge. Currently, it can interpret the card's color; you need to write the algorithm.
If there are no mistakes, return 0.
Example(s)


biggestMistake(["B", "B", "R", "B", "R"]) is 2
biggestMistake(["R", "B", "R", "B", "B"]) is 2
biggestMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) is 0

*/

function biggestMistake(deck) {
  if (deck.length <= 1) return 0;

  let currentStreak = 1; // counts how many same-color cards we're seeing right now
  let maxStreak = 1; // remembers the longest streak we've seen so far

  for (let i = 1; i < deck.length; i++) {
    // Compare current card with previous card
    if (deck[i] === deck[i - 1]) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 1; // reset when colors don't match
    }
  }

  return maxStreak > 1 ? maxStreak : 0;
}

console.log(biggestMistake(['B', 'B', 'R', 'B', 'R']) == 2);
console.log(biggestMistake(['R', 'B', 'R', 'B', 'B']) == 2);
console.log(
  biggestMistake(['R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R']) == 0
);
// console.log(biggestMistake(['R']) == 0);
// console.log(biggestMistake(['B']) == 0);
// console.log(biggestMistake(['R', 'B']) == 0);
// console.log(biggestMistake(['B', 'R']) == 0);
// console.log(biggestMistake(['R', 'R']) == 2);
// console.log(biggestMistake(['B', 'B']) == 2);
// console.log(biggestMistake(['R', 'R', 'R', 'R', 'R']) == 5);
// console.log(biggestMistake(['R', 'B', 'R', 'R', 'R']) == 3);
// console.log(biggestMistake(['B', 'B', 'R', 'B', 'R']) == 2);
// console.log(biggestMistake(['R', 'B', 'R', 'B', 'B']) == 2);
// console.log(
//   biggestMistake(['B', 'B', 'R', 'R', 'B', 'B', 'R', 'R', 'B', 'R']) == 2
// );
// console.log(
//   biggestMistake(['R', 'B', 'R', 'B', 'B', 'B', 'R', 'R', 'B', 'B', 'R']) == 3
// );
// console.log(
//   biggestMistake(['B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R']) == 0
// );
// console.log(
//   biggestMistake(['R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R', 'B', 'R']) == 0
// );
