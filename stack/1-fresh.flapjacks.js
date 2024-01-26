/*
'''
❓ PROMPT
You're the manager of a flapjack (pancake) shop. At the end of the day, you get a printed record of every batch of flapjacks added to the serving area and every batch that's removed because an order comes in.

The record looks like a series of positive and negative integers, so that, e.g., [2, -1, 3, -2, -1] means

2 pancakes were taken off the griddle and put on the serving area
1 pancake went out for an order
3 pancakes were added to the griddle
2 pancakes went out for an order
1 pancacke went out for an order

As the manager, you want orders to go out immediately but also don't want too many pancakes piling up in the serving area. You want to make sure that there are never more than 4 pancakes in the stack, waiting to be served, but also that orders of two or less are always served immediately. The stack can be empty, so long as it is refreshed before the next order comes in.

cakes = 1
stack = [2, -1, 3, -2, -1]
         ^
output = true

no more than 4 pankaces in stack
orders of 2 or less are served immediately

Part 1)
  Write a function that takes an end-of-day record and that returns true or false to indicate whether the constraints were satisfied.

Part 2)
  If the cooks got ahead, you also want to know how far ahead. Modify the function to return a pair. The first item in the pair is the same as in part 1, just true or false indicating whether the constraints were satisfied or not. The second value in the pair should be the maximum height of the stack during the day.

Example(s)
freshFlapjacks([2, -1]) => [true, 2]
freshFlapjacks([-1, 2]) => [false, 1]
freshFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function freshFlapjacks(pancakes) {
def freshFlapjacks(pancakes: list[int]) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

if current equals or less than 2 and next item is not below zero
  return false

if readyServes are more than 4
  return false


return true
*/

function freshFlapjacks(pancakes) {
  let readyServes = 0;
  let maxHeight = 0;

  for (let i = 0; i < pancakes.length; i++) {
    const pancake = pancakes[i];

    readyServes += pancake;

    if (readyServes > maxHeight) {
      maxHeight = readyServes;
    }

    if (pancake <= 2 && pancake > 0 && pancakes[i + 1] >= 0) {
      return [false, maxHeight];
    }

    if (readyServes > 4) {
      return [false, maxHeight];
    }
  }

  if (readyServes < 0) {
    return [false, maxHeight];
  }

  return [true, maxHeight];
}

console.log(JSON.stringify(freshFlapjacks([2])) === JSON.stringify([true, 2]));
console.log(
  JSON.stringify(freshFlapjacks([-2])) === JSON.stringify([false, 0])
);
console.log(JSON.stringify(freshFlapjacks([4])) === JSON.stringify([true, 4]));
console.log(JSON.stringify(freshFlapjacks([5])) === JSON.stringify([false, 5]));
console.log(
  JSON.stringify(freshFlapjacks([4, -2, 1, -2])) === JSON.stringify([true, 4])
);
console.log(
  JSON.stringify(freshFlapjacks([2, -1, 1, -1, 1])) ===
    JSON.stringify([true, 2])
);
console.log(
  JSON.stringify(freshFlapjacks([4, -2, 1, -2, 4])) ===
    JSON.stringify([false, 5])
);
console.log(
  JSON.stringify(freshFlapjacks([4, -2, 1, -2, -4])) ===
    JSON.stringify([false, 4])
);
