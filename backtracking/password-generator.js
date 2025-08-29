/*
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.
This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths. Try it! It's a fun demonstration of the exponential nature of some decision trees.

generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]

*/

function generatePasswords(validCharacters, minLength, maxLength) {
  // store result
  const results = [];

  function dfs(string, index) {
    // when do we stop?
    if (string.length > maxLength) {
      return; // return when we're at the end of tree
    }

    if (string.length >= minLength && string.length <= maxLength) {
      results.push(string);
      //  no return so we can explore all possibilities
    }

    for (let i = index; i < validCharacters.length; i++) {
      dfs(string + validCharacters[i], 0); // 0 because we're starting with any charatcer in any position
    }
  }

  dfs('', 0);

  return results;
}

console.log(generatePasswords(['a', 'b', 'c'], 2, 3));
