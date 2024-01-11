/*
Press the run button to execute the following code. Changes in this editor will not be saved!

Given an input string, print the growing substring from 0 to the current index as a stairwell.

Input: stairwell
Output:

s
st
sta
stai
stair
stairw
stairwe
stairwel
stairwell

*/

let results = []; // s

// IMPLEMENT ME
function printStairwell(word, idx = 0) {
  if (word.length === idx) {
    // 0
    console.log('end');
    return;
  }

  const array = word.split('');
  // [s, t, a, i, r]

  results.push(array[idx]); // s

  console.log(results.join(''));

  printStairwell(word, idx + 1);
}

printStairwell('strairwell', 0);
