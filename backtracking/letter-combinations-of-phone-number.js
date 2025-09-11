/*
'''
Given a string digits consisting only of characters from '2' to '9', return all possible letter combinations that the number could represent using the letters shown on a telephone keypad.

• Return the combinations in any order.
• If digits is an empty string, return an empty list.

You may assume the input length is at most 10 and that it fits entirely in memory.
 

EXAMPLE(S)
Input: "23" ➜ Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Input: ""  ➜ Output: []
 

FUNCTION SIGNATURE
def letter_combinations(digits: str) -> List[str]
function letterCombinations(digits) {}
'''
*/

function letterCombinations(digits) {
  const phone = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];
  if (!digits || digits.length === 0) return result;

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path.join(''));
      return;
    }
    for (const ch of phone[digits[index]]) {
      path.push(ch);
      backtrack(index + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

console.log(letterCombinations('234'));
