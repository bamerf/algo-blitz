/*
'''
❓ PROMPT
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
sumDigits(12) == 3
sumDigits(49) == 13
sumDigits(126) == 9
 

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

- until at the end of the array
- convert number to string
- split number
- recurse adding current item to sum and increment index
 

🛠️ IMPLEMENT
function sumDigits(n) {
def sumDigits(n: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/*
24 = 6

#1
split = ["2", "4"]
index = 2
sum = 6


*/

function sumDigits(n, index = 0, sum = 0) {
  const stringNumber = n.toString();

  if (index === stringNumber.length) {
    return sum;
  }

  return sumDigits(n, index + 1, sum + Number([stringNumber[index]]));
}

function sumDigits(n) {
  if (n < 10) {
    return n;
  }

  const rightMostDigit = n % 10;
  const nextNumber = Math.floor(n / 10);

  return rightMostDigit + sumDigits(nextNumber);
}

console.log(sumDigits(126) == 9);
console.log(sumDigits(49) == 13);
console.log(sumDigits(12) == 3);
console.log(sumDigits(10) == 1);
console.log(sumDigits(1) == 1);
console.log(sumDigits(0) == 0);
console.log(sumDigits(730) == 10);
console.log(sumDigits(1111) == 4);
console.log(sumDigits(11111) == 5);
console.log(sumDigits(10110) == 3);
console.log(sumDigits(235) == 10);
