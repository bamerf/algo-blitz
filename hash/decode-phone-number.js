/*
'''
❓ PROMPT
Businesses like to make phone numbers that have meaning with English characters, but it's hard for users to convert the letter to numbers when dialing. For example, 

*1-800-U-B-SMART* becomes *1-800-8-2-76278*

because 8 corresponds to *T, U*, and *V* so the *U* becomes 8, 2 corresponds to *A, B*, and *C* so the *B* becomes 2, and so on according to a phone's dial pad.

Write a function that converts the English letters to their digit equivalent while preserving the formatting.

Example(s)
decodePhoneNumber("1-800-U-B-SMART") == "1-800-8-2-76278"
decodePhoneNumber("1.800.I.C.BUTTS") == "1.800.4.2.28887"
decodePhoneNumber("1-888-GET-RICH") == "1-888-438-7424"
decodePhoneNumber("555-U-HUNGRY!") == "555-8-486479!"
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:

empty string
all digits
all letters
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

- split the string assign to variable
- iterate through array
  - replace item with value in hash if exists

- return array


🛠️ IMPLEMENT
function decodePhoneNumber(text) {
def decodePhoneNumber(text: str) -> str:

The dial pad mapping in both directions has been provided for your convenience. 

letterToDigit = {
  'A':'2', 'B':'2', 'C':'2',
  'D':'3', 'E':'3', 'F':'3',
  'G':'4', 'H':'4', 'I':'4',
  'J':'5', 'K':'5', 'L':'5',
  'M':'6', 'N':'6', 'O':'6',
  'P':'7', 'Q':'7', 'R':'7', 'S':'7',
  'T':'8', 'U':'8', 'V':'8',
  'W':'9', 'X':'9', 'Y':'9', 'Z':'9',
  }

digitToLetters = {
  '2':['A','B','C'],
  '3':['D','E','F'],
  '4':['G','H','I'],
  '5':['J','K','L'],
  '6':['M','N','O'],
  '7':['P','Q','R','S'],
  '8':['T','U','V'],
  '9':['W','X','Y','Z']
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const letterToDigit = {
  A: '2',
  B: '2',
  C: '2',
  D: '3',
  E: '3',
  F: '3',
  G: '4',
  H: '4',
  I: '4',
  J: '5',
  K: '5',
  L: '5',
  M: '6',
  N: '6',
  O: '6',
  P: '7',
  Q: '7',
  R: '7',
  S: '7',
  T: '8',
  U: '8',
  V: '8',
  W: '9',
  X: '9',
  Y: '9',
  Z: '9',
};

function decodePhoneNumber(text) {
  const split = text.split('');

  const digits = [];

  for (const item of split) {
    const uppercaseItem = item.toUpperCase();
    if (uppercaseItem in letterToDigit) {
      digits.push(letterToDigit[uppercaseItem]);
    } else {
      digits.push(item);
    }
  }

  return digits.join('');
}

console.log(decodePhoneNumber('1-800-U-B-SMART') == '1-800-8-2-76278');
console.log(decodePhoneNumber('1.800.I.C.BUTTS') == '1.800.4.2.28887');
console.log(decodePhoneNumber('1-888-GET-RICH') == '1-888-438-7424');
console.log(decodePhoneNumber('555-U-HUNGRY!') == '555-8-486479!');
console.log(decodePhoneNumber('ORANGES') == '6726437');
console.log(decodePhoneNumber('C O C O N U T') == '2 6 2 6 6 8 8');
console.log(decodePhoneNumber('B_A_N_A_N_A_S') == '2_2_6_2_6_2_7');
console.log(decodePhoneNumber('I 1 I 1 I 1 I') == '4 1 4 1 4 1 4');
console.log(
  decodePhoneNumber('1111 AaBb CcDd EeFf 1111') == '1111 2222 2233 3333 1111'
);
console.log(decodePhoneNumber('777 EcsTaSy 777') == '777 3278279 777');
console.log(decodePhoneNumber('') == '');
