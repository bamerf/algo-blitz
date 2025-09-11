/**

'''

We're building a system to record messages sent over the phone using the T9 keypad where 2 can be used to represent the letters [a, b, c], etc. Given a list of words we expect to encounter and a sequence of digits, determine which words this sequence might represent. For example:

input_digits: [2, 2, 8]
valid_words: ["act","bat","cat","acd","test"]
output:  [["act"], ["bat"], ["cat"]]

- go through each input mapped to thier letter hash
- build a slate from an anchor digit and all possible paths related to other digits.
  - push to all permutations

- loop through the valid words and if they exists in the valid words push to result array

Once you have this working, modify your code to now output possible phrases, sequences of these valid words:

input_digits: [7, 6, 6, 3, 8, 4, 6, 3]
valid_words: ["some","time","rome","sometime","so","me"]
output: [["rome","time"],["so","me","time"],["some","time"],["sometime"]]

T9 keypad: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/2560px-Telephone-keypad2.svg.png
 

EXAMPLE(S)
see examples in prompt
 

FUNCTION SIGNATURE
function getPossibleWords(words, digits)
def get_possible_words(words, digits):

''' 
 
 */

function getPossibleWords(words, digits) {
  const result = [];

  const hash = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  function helper(slate, index) {
    // basecase to exit recursive fn
    if (index === digits.length) {
      if (words.includes(slate)) {
        result.push(slate);
      }
      return;
    }

    for (const char of hash[digits[index]]) {
      helper(slate + char, index + 1);
    }
  }

  helper('', 0);

  console.log(result);

  return result;
}

getPossibleWords(['act', 'bat', 'cat', 'acd', 'test'], [2, 2, 8]);
