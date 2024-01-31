/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // initialize a dict
  const dict = {};
  // split s into letter
  const sLetters = s.split('');

  // iterate through letters
  for (const sletter of sLetters) {
    if (!dict[sletter]) {
      // if doesn't add sletter
      dict[sletter] = 1;
    } else {
      // if sletter exists in dict add 1
      dict[sletter] += 1;
    }
  }

  // split t
  const tLetters = t.split('');

  // iterate t letters
  for (const tletter of tLetters) {
    console.log(tletter);
    // if letter doesn't exist return false
    if (!dict[tletter]) {
      dict[tletter] = 1;
      console.log(dict);
    }

    // if tletter exists in dict, and value greater than 1, subtract
    else if (dict[tletter] && dict[tletter] > 1) {
      dict[tletter] -= 1;
    }

    // if tletter exists and value is 1, delete tletter
    else if (dict[tletter] && dict[tletter] === 1) {
      delete dict[tletter];
    }
  }

  console.log(dict);

  // create an array from dict
  const array = Object.keys(dict);
  if (array.length === 0) {
    // if empty array return true
    return true;
  }

  // otherwise return false
  return false;
};

console.log(isAnagram('a', 'ab'));
