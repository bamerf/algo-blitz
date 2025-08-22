/**
 The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F.  The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.
 Given a number n, write a function that generates all n-digit ternary numbers.

 Numbers starting with zero shouldn't normally be included but the ternary representing the zero value is a valid 1-digit ternary. No other strings should start with a "0"!

generateNDigitTernaries(1) == ["0","1","2"]
generateNDigitTernaries(2) == ["10","11","12","20","21","22"]
 */

function generateNDigitTernaries(digit) {
  const output = [];

  function helper(currentString) {
    if (currentString.length === digit) {
      output.push(currentString);
      return;
    }

    for (let ternaryNum = 0; ternaryNum <= 2; ternaryNum++) {
      if (currentString === '' && ternaryNum === 0 && digit > 1) {
        continue; // Skip adding 0 as first digit for multi-digit numbers
      }

      helper(currentString + ternaryNum);
    }
  }

  helper('');

  return output;
}

// Test 1: Single digit (special case - allows "0")
console.log(generateNDigitTernaries(1));
// Expected: ["0", "1", "2"]

// Test 2: Two digits (no leading zeros except "0")
console.log(generateNDigitTernaries(2));
// Expected: ["10", "11", "12", "20", "21", "22"]

// Test 3: Three digits
console.log(generateNDigitTernaries(3));
// Expected: ["100", "101", "102", "110", "111", "112", "120", "121", "122",
//           "200", "201", "202", "210", "211", "212", "220", "221", "222"]
