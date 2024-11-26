/*
'''
❓ PROMPT
You're working on a finance application and need to format monetary amounts in the following manner for accounting purposes. Every number must adhere to a strict set of rules:

1. All amounts are rounded to two decimal places, even if it is .00.
2. A $ precedes the first digit.
3. Thousands, millions, billions, etc have commas between every 3 digits from the left of the decimal.
4. Negative numbers are surrounded by parentheses.
5. If the absolute amount is less than 1, there should still be a zero before the '.'

Write a function that takes a numeric value and outputs the "finance formatted" string representation.

This is a very realistic data processing problem with lots of special cases!

Example(s)
moneyFormat(1) == "$1.00"
moneyFormat(-1) == "($1.00)"
moneyFormat(16) == "$16.00"
moneyFormat(123) == "$123.00"

// happy cases
console.log(moneyFormat(0) == "$0.00")
console.log(moneyFormat(1) == "$1.00")
console.log(moneyFormat(-1) == "($1.00)")
console.log(moneyFormat(16) == "$16.00")
console.log(moneyFormat(123) == "$123.00")

// decimal variants
console.log(moneyFormat(0.01) == "$0.01")
console.log(moneyFormat(.02) == "$0.02")
console.log(moneyFormat(.3) == "$0.30")
console.log(moneyFormat(0.0001) == "$0.00")
console.log(moneyFormat(4.954) == "$4.95")
console.log(moneyFormat(4.955) == "$4.96")
console.log(moneyFormat(4.) == "$4.00")
console.log(moneyFormat(.999) == "$1.00")

// comma variants
console.log(moneyFormat(1234) == "$1,234.00")
console.log(moneyFormat(1001.01) == "$1,001.01")
console.log(moneyFormat(50000) == "$50,000.00")
console.log(moneyFormat(6789123456789) == "$6,789,123,456,789.00") // 6.7 trillion

// negative variants
console.log(moneyFormat(-0.01) == "($0.01)")
console.log(moneyFormat(-.02) == "($0.02)")
console.log(moneyFormat(-0.001) == "($0.00)")
console.log(moneyFormat(-1000) == "($1,000.00)")

// complex variants
console.log(moneyFormat(-34567) == "($34,567.00)")
console.log(moneyFormat(-12345.67) == "($12,345.67)")
console.log(moneyFormat(-12345.678) == "($12,345.68)")

 

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
function moneyFormat(amount) {
def moneyFormat(amount: float) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function moneyFormat(number) {
  // Step 1: Handle the absolute value and negative flag
  const isNegative = number < 0;
  const absoluteValue = Math.abs(number);

  // Step 2: Round to 2 decimal places
  const roundedNumber = absoluteValue.toFixed(2);

  // Step 3: Split into integer and decimal parts
  const [integerPart, decimalPart] = roundedNumber.split('.');

  // Step 4: Add commas for thousands
  const digits = integerPart.split('');
  const withCommas = [];

  // Add commas every 3 digits from the right
  for (let i = digits.length - 1; i >= 0; i--) {
    const positionFromRight = digits.length - 1 - i;
    if (positionFromRight > 0 && positionFromRight % 3 === 0) {
      withCommas.unshift(',');
    }
    withCommas.unshift(digits[i]);
  }

  // Step 5: Combine all parts with proper formatting
  const formattedNumber = `$${withCommas.join('')}.${decimalPart}`;

  // Step 6: Handle negative numbers with parentheses
  return isNegative ? `(${formattedNumber})` : formattedNumber;
}

console.log(moneyFormat(1) == '$1.00');
console.log(moneyFormat(-1) == '($1.00)');
console.log(moneyFormat(16) == '$16.00');
console.log(moneyFormat(123) == '$123.00');

// happy cases
console.log(moneyFormat(0) == '$0.00');
console.log(moneyFormat(1) == '$1.00');
console.log(moneyFormat(-1) == '($1.00)');
console.log(moneyFormat(16) == '$16.00');
console.log(moneyFormat(123) == '$123.00');

// // decimal variants
// console.log(moneyFormat(0.01) == '$0.01');
console.log(moneyFormat(0.02) == '$0.02');
console.log(moneyFormat(0.3) == '$0.30');
console.log(moneyFormat(0.0001) == '$0.00');
console.log(moneyFormat(4.954) == '$4.95');
console.log(moneyFormat(4.955) == '$4.96');
console.log(moneyFormat(4) == '$4.00');
console.log(moneyFormat(0.999) == '$1.00');

// comma variants
console.log(moneyFormat(1234) == '$1,234.00');
console.log(moneyFormat(1001.01) == '$1,001.01');
console.log(moneyFormat(50000) == '$50,000.00');
console.log(moneyFormat(6789123456789) == '$6,789,123,456,789.00'); // 6.7 trillion

// negative variants
console.log(moneyFormat(-0.01) == '($0.01)');
console.log(moneyFormat(-0.02) == '($0.02)');
console.log(moneyFormat(-0.001) == '($0.00)');
console.log(moneyFormat(-1000) == '($1,000.00)');

// complex variants
console.log(moneyFormat(-34567) == '($34,567.00)');
console.log(moneyFormat(-12345.67) == '($12,345.67)');
console.log(moneyFormat(-12345.678) == '($12,345.68)');
