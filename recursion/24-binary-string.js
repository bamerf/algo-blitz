/*
'''
Print all K-length binary strings without consecutive 1s

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.
 

EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101

// function printBinaryWithoutConsecutive1s(maxLen) {
//   // binary string cannot be less than or equal to 1 char
//   if (maxLen < 1) return; 

//   function helper(string) {
//     if (string.length === maxLen) {
//       console.log(string)
//       return;
//     }

//     // only recurse down 1 path if the previous character was not '1'
//     '0000'
//     if (string[string.length - 1] !== '1')
//       helper(string + '1')

//     helper(string + '0')
//   }

//   helper('0')
//   helper('1')
// }

// printBinaryWithoutConsecutive1s(4)
*/
