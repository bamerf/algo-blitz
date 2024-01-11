/*
'''
❓ PROMPT
In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

Example(s)
factorial(3) == 6
factorial(5) == 120
factorial(4) == 24
 

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

4x3x2x1

if n less than 1 return
recursive call n -1
 

🛠️ IMPLEMENT
function factorial(n) {
def factorial(n: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function factorial(n) {
  let result = n;

  if (n === 1) {
    return result;
  }

  result *= factorial(n - 1);

  return result;
}

console.log(factorial(4));
console.log(factorial(12) === 479001600);
console.log(factorial(10) === 3628800);
console.log(factorial(5) === 120);
console.log(factorial(3) === 6);
console.log(factorial(2) === 2);
console.log(factorial(1) === 1);
