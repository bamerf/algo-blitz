/**

Given a string consisting only of digits, return all possible valid IPv4 addresses that can be obtained by inserting exactly three dots into the string.
A valid IPv4 address consists of four integers (each between 0 and 255) separated by dots. Segments cannot contain leading zeros unless the segment itself is '0'.
Return the addresses in any order.
If no valid address can be formed, return an empty list.

Input: '25525511135'
Output: ['255.255.11.135', '255.255.111.35']

Input: '0000'
Output: ['0.0.0.0']

edge cases
  empty string -> []
  null -> []
  0000000000 -> []
  2345 -> 2.3.4.5
  1111 -> 1.1.1.1
  999999999999 -> 999.999.999.999 invalid - at least one of the segments has more than 255 -> []
  101023 -> [10.0.1.23, 101.0.2.3, and more]

contraints
  - a section that starts with 0 can't have next integer as 0. 00123 -> is invalid because first 0 is followed by another 0 -> 00.1.2.3 is invalid & 0.0.12.3 is valid
  - >= 0 and <= 255
  - we have 3 dots
  - we have 4 segments
  - maximum length of a segment is 3 characters

Brainstorming first approach:

I would have a recursive function that would insert the dots from the start and push each section to an array and then loop over the array to check if section meets the contraintes



placeHolderArray = [2, 5, 5, 25511135]

push to placeholder array 
2.5.5.25511135

loop over placeHolder array and if all conditions are met push to result array

if not I would pop out the last item in placeholder array and move my dot one integer forward and do the process again
2.5.5.25511135

25525511135
1
 2
  3
 */

function restoreIpAddresses(string) {
  const output = [];
  for (let firstIndex = 1; firstIndex <= 3; firstIndex++) {
    let firstSeg = string.substring(0, firstIndex);
    let firstNumb = Number(firstSeg);
    for (
      let secIndex = firstIndex + 1;
      secIndex <= firstIndex + 3;
      secIndex++
    ) {
      let secSeg = string.substring(firstIndex, secIndex);
      let secNum = Number(secSeg);
      for (let trdIndex = secIndex + 1; trdIndex <= secIndex + 3; trdIndex++) {
        const placeHolderArray = [];

        let trdSeg = string.substring(secIndex, trdIndex);
        let trdNum = Number(trdSeg);

        // Get 4th segment
        let fourthSeg = string.substring(trdIndex);
        let fourthNum = Number(fourthSeg);

        if (fourthNum >= 0 && fourthNum <= 255) {
          placeHolderArray.push(fourthNum);
        }

        function hasLeadingZeros(segment) {
          return segment.length > 1 && segment[0] === '0';
        }

        // Validate ALL segments at once
        if (
          firstNumb <= 255 &&
          secNum <= 255 &&
          trdNum <= 255 &&
          fourthNum <= 255 &&
          fourthSeg.length > 0 &&
          !hasLeadingZeros(firstSeg) &&
          !hasLeadingZeros(secSeg) &&
          !hasLeadingZeros(trdSeg) &&
          !hasLeadingZeros(fourthSeg)
        ) {
          let ipAddress = [firstNumb, secNum, trdNum, fourthNum].join('.');
          output.push(ipAddress);
        }
      }
    }
  }

  return output;
}

function restoreIpAddressesRecurssive(s) {
  const result = [];

  function backtrack(startIndex, segmentsBuilt, currentPath) {
    // Base case: if we have 4 segments and used all characters
    if (segmentsBuilt === 4) {
      if (startIndex === s.length) {
        result.push(currentPath.join('.'));
      }
      return;
    }

    function isValidSegment(segment) {
      // Check 1: Not empty
      if (segment.length === 0) return false;

      // Check 2: No leading zeros (except "0" itself)
      if (segment.length > 1 && segment[0] === '0') return false;

      // Check 3: Value must be between 0 and 255
      let num = Number(segment);
      return num >= 0 && num <= 255;
    }

    // Try segments of length 1, 2, and 3
    for (let len = 1; len <= 3; len++) {
      if (startIndex + len > s.length) break; // Don't go past string end

      let segment = s.substring(startIndex, startIndex + len);

      // Validate segment
      if (isValidSegment(segment)) {
        // Choose: add segment to path
        currentPath.push(segment);

        // Explore: recurse for next segment
        backtrack(startIndex + len, segmentsBuilt + 1, currentPath);

        // Backtrack: remove segment from path
        currentPath.pop();
      }
    }
  }

  backtrack(0, 0, []);
  return result;
}

const assert = require('assert');

assert.deepStrictEqual(
  restoreIpAddresses('25525511135').sort(),
  ['255.255.11.135', '255.255.111.35'].sort()
);
assert.deepStrictEqual(restoreIpAddresses('0000').sort(), ['0.0.0.0'].sort());
assert.deepStrictEqual(restoreIpAddresses('1111').sort(), ['1.1.1.1'].sort());
assert.deepStrictEqual(
  restoreIpAddresses('010010').sort(),
  ['0.10.0.10', '0.100.1.0'].sort()
);
assert.deepStrictEqual(
  restoreIpAddresses('101023').sort(),
  ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'].sort()
);

console.log('✅ All JavaScript IP tests passed.');

assert.deepStrictEqual(
  restoreIpAddressesRecurssive('25525511135').sort(),
  ['255.255.11.135', '255.255.111.35'].sort()
);
assert.deepStrictEqual(
  restoreIpAddressesRecurssive('0000').sort(),
  ['0.0.0.0'].sort()
);
assert.deepStrictEqual(
  restoreIpAddressesRecurssive('1111').sort(),
  ['1.1.1.1'].sort()
);
assert.deepStrictEqual(
  restoreIpAddressesRecurssive('010010').sort(),
  ['0.10.0.10', '0.100.1.0'].sort()
);
assert.deepStrictEqual(
  restoreIpAddressesRecurssive('101023').sort(),
  ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'].sort()
);

console.log('✅ All JavaScript IP tests passed.');
