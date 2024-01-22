/*
https://leetcode.com/problems/decode-string/description/

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.


Example 1:

stack = []

count = 3
decoded = ""
current = ""

for count time

  letter += 

3[a]2[bc]
 ^

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

2[abc]3[cd]ef
           ^
stack = []
currNum = 0
currS = 'abcabdcdcdcdef'

num = 3
prev = 'abcabc'

*/

function decodeString(string) {
  const stack = [];
  let currNum = '';
  let currS = '';

  console.log(currNum);

  for (let char of string) {
    if (char === '[') {
      stack.push(currS);
      stack.push(Number(currNum));
      currS = '';
      currNum = 0;
      continue;
    }

    if (char === ']') {
      let num = stack.pop();
      let prevString = stack.pop();
      currS = prevString + currS.repeat(num);
      continue;
    }

    if (!isNaN(char)) {
      currNum += char;
      continue;
    }

    currS += char;
  }

  return currS;
}

console.log(decodeString('10[leetcode]'));
