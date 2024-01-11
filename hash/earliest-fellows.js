/*
'''
❓ PROMPT
We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

Example(s)
fellowTimes = {"oliver": 3, "tobey": 3}
earliestFellows(fellowTimes) == ["oliver", "tobey"]

fellowTimes = {"oliver": 3, "pinky": 4, "pixel": 2, "tobey": 1}
earliestFellows(fellowTimes) == ["tobey"]
 

🔎 EXPLORE
List your assumptions & discoveries:

multiple with the same timestamp
 

Insightful & revealing test cases:

empty object
multiple earliest
single earliest
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

get the values from the object
sort the object
iterate through the array
push item to the results array
push any item that is the same timestamp as the first item in the array
 

🛠️ IMPLEMENT
function earliestFellows(fellowTimes) {
def earliestFellows(fellowTimes: dict) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function earliestFellows(fellowTimes) {
//   const results = [];
//   Object.entries(fellowTimes)
//     .map((item) => ({
//       name: item[0],
//       time: item[1],
//     }))
//     .sort((a, b) => {
//       return a.time - b.time;
//     })
//     .forEach((item, index) => {
//       if (index === 0) {
//         results.push(item);
//       } else {
//         if (item.time === results[0].time) {
//           results.push(item);
//         }
//       }
//     });

//   return results.map((item) => item.name);
// }

function earliestFellows(fellowTimes) {
  let earliestTime = Number.MAX_VALUE;
  let currEarlyFellows = [];

  for (const name in fellowTimes) {
    const time = fellowTimes[name];

    if (time < earliestTime) {
      earliestTime = time;
      currEarlyFellows = [name];
    } else if (time === earliestTime) {
      currEarlyFellows.push(name);
    }
  }

  return currEarlyFellows;
}

console.log(JSON.stringify(earliestFellows(new Map())) === JSON.stringify([]));

let map = { oliver: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['oliver'])
);

map = { oliver: 3, tobey: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['oliver', 'tobey'])
);

map = { oliver: 3, pinky: 4, pixel: 2, tobey: 1, james: 1 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['tobey', 'james'])
);

map = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['pinky', 'tobey'])
);

map = { tony: 3, jess: 1, paavo: 2, zoe: 1, ariel: 2, jono: 1, angus: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) ===
    JSON.stringify(['jess', 'zoe', 'jono'])
);
