/*

A binary watch shows the time using LEDs.
• The hour is represented by 4 LEDs that encode the values 1, 2, 4, 8 (allowing hours 0 – 11).
• The minutes are represented by 6 LEDs that encode the values 1, 2, 4, 8, 16, 32 (allowing minutes 0 – 59).
Given an integer turned_on (0 ≤ turned_on ≤ 8) indicating the total number of LEDs that are lit, return every possible time the watch could display.
Times should be formatted as "H:MM" where minutes always have two digits (e.g. "3:07"). The order of the returned list is not important. If no time can be represented, return an empty list.
Example(s)
Example 1:
Input: turned_on = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Example 2:
Input: turned_on = 0
Output: ["0:00"]

*/

function readBinaryWatch(onBits) {
  if (onBits > 8) return [];

  const bits = [1, 2, 4, 8, 16, 32];
  const results = [];

  function dfs(usedBits = 0, hours = 0, minutes = 0, hIndex = 0, mIndex = 0) {
    // Check to see if we've turned on enough bits
    if (usedBits === onBits) {
      // Make sure to include a leading zero for single digit minutes
      results.push(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
      return;
    }
    // Even if we haven't turned on enough bits, we've been through all
    // of the options.
    if (hIndex === 4) {
      return;
    }

    if (mIndex < 6) {
      // skip this minutes bit
      dfs(usedBits, hours, minutes, hIndex, mIndex + 1);
      // try adding minutes, but only if we don't go over 60
      if (minutes + bits[mIndex] < 60) {
        dfs(usedBits + 1, hours, minutes + bits[mIndex], hIndex, mIndex + 1);
      }
    } else {
      // skip this hours bit
      dfs(usedBits, hours, minutes, hIndex + 1, mIndex);
      // try adding minutes but only if we don't go over 12
      if (hours + bits[hIndex] < 12) {
        dfs(usedBits + 1, hours + bits[hIndex], minutes, hIndex + 1, mIndex);
      }
    }
  }

  dfs();
  return results;
}

function assertArraysEqual(a, b) {
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  console.assert(
    JSON.stringify(sortedA) === JSON.stringify(sortedB),
    `Assertion failed:\nExpected: ${JSON.stringify(
      sortedB
    )}\nGot: ${JSON.stringify(sortedA)}`
  );
}

console.assert(
  JSON.stringify(readBinaryWatch(0)) === JSON.stringify(['0:00']),
  'Test 0 LEDs failed'
);

assertArraysEqual(readBinaryWatch(1), [
  '0:01',
  '0:02',
  '0:04',
  '0:08',
  '0:16',
  '0:32',
  '1:00',
  '2:00',
  '4:00',
  '8:00',
]);

console.assert(
  JSON.stringify(readBinaryWatch(10)) === JSON.stringify([]),
  'Test 10 LEDs failed'
);

assertArraysEqual(readBinaryWatch(2), [
  '0:03',
  '0:05',
  '0:06',
  '0:09',
  '0:10',
  '0:12',
  '0:17',
  '0:18',
  '0:20',
  '0:24',
  '0:33',
  '0:34',
  '0:36',
  '0:40',
  '0:48',
  '10:00',
  '1:01',
  '1:02',
  '1:04',
  '1:08',
  '1:16',
  '1:32',
  '2:01',
  '2:02',
  '2:04',
  '2:08',
  '2:16',
  '2:32',
  '3:00',
  '4:01',
  '4:02',
  '4:04',
  '4:08',
  '4:16',
  '4:32',
  '5:00',
  '6:00',
  '8:01',
  '8:02',
  '8:04',
  '8:08',
  '8:16',
  '8:32',
  '9:00',
]);

// For turnedOn = 8
const result8 = readBinaryWatch(8);
console.assert(result8.length > 0, 'Test 8 LEDs failed');
console.assert(
  result8.every((t) => t.includes(':')),
  'All results must be formatted as times'
);

// For turnedOn = 9
console.assert(
  JSON.stringify(readBinaryWatch(9)) === JSON.stringify([]),
  'Test 9 LEDs failed'
);

console.log('All JavaScript tests passed.');
