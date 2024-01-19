/*
  Queues :
  Rotate string with a queue k times left
  string = "abcde", k = 2
  output = "cdeab"

  k = 2

  hold = [a, b]

  a b c d e

  loop through the string for k times
    push letter into hold array

  slice original array by k
  return the of spread original and hold array

*/

// using substring
// function rotateLeft(string, target) {
//   let tempArr = '';

//   // [a, b]
//   for (let i = 0; i < target; i++) {
//     tempArr += string[i];
//   }
//   console.log(tempArr);

//   return string.substring(target) + tempArr;
// }

// using queue
function rotateLeft(string, target) {
  let arr = Array.from(string); // [a, b, c, d, e]
  let queue = arr.slice(0, target); // [a, b]

  for (let i = 0; i < target; i++) {
    arr.push(queue.shift());
  }

  return arr.slice(target).join('');
}

console.log(rotateLeft('abcde', 2));
