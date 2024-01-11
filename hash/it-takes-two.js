/*
'''
❓ PROMPT
A dance studio is holding a Tango lesson tonight involving 2 half-hour sessions. The studio is creating a plan to pair dancers in the second session with a different partner from the first session. Given a list of Tango pairs for each session, determine if the studio will pair up any partners twice.

This problem aims to familiarize you with storing and retrieving information from data structures to create a minimal algorithm. In this instance, the Engineering Method is valuable because it helps you arrive at a more optimal algorithm than brute force.

As a follow-up, how would you write an algorithm to detect repeated pairs in 3 sessions, in any number of sessions? How would you write an O(N) time algorithm to determine how often the matcher created each pair? Again, it should count pairs in reversed order as the same pair.

Example(s)
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Charles"], ["Baxter", "Davis"], ["Alice", "Daniels"]]
hasRepeatTangoPartner(session1, session2) == False

session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Daniels"], ["Alice", "Charles"], ["Baxter", "Davis"]]
hasRepeatTangoPartner(session1, session2) == True

Jack and Daniels have been partnered up on both sessions.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:

case sensitive
emtpy array
no repeats
multiple repeats
same order of names


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N2)
Space: O(1)
 

📆 PLAN
Outline of algorithm #:

iterate through session1
if using indexOf if item exists in second array return true
otherwise return false
 

🛠️ IMPLEMENT
def hasRepeatTangoPartner(firstSession: list[str], secondSession: list[str]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// const sesh1 = [
//   ['Alice', 'Baxter'],
//   ['Charles', 'Davis'],
//   ['Jack', 'Daniels'],
// ];
// const sesh2 = [
//   ['Jack', 'Daniels'],
//   ['Alice', 'Charles'],
//   ['Baxter', 'Davis'],
// ];
// function hasRepeatTangoPartner(sesh1, sesh2) {
//   let match = false;
//   const map = new Map();

//   for (const index in sesh1) {
//     const sesh1String = JSON.stringify(sesh1[index]);
//     map.set(sesh1String);
//   }

//   for (const index2 in sesh2) {
//     const sesh2String = JSON.stringify(sesh2[index2]);
//     if (map.has(sesh2String)) {
//       match = true;
//     }
//   }

//   return match;
// }

function hasRepeatTangoPartner(firstSession, secondSession) {
  let firstTango = new Map();

  for (let [partner1, partner2] of firstSession)
    firstTango.set(partner1, partner2);

  // check partners in both directions
  for (let [partner1, partner2] of secondSession)
    if (
      (firstTango.has(partner1) && firstTango.get(partner1) === partner2) ||
      (firstTango.has(partner2) && firstTango.get(partner2) === partner1)
    )
      return true;

  return false;
}

// swapped ordering shouldn't affect the correctness
let session1 = [['Alice', 'Baxter']];
let session2 = [['Baxter', 'Alice']];
console.log(hasRepeatTangoPartner(session1, session2) === true);

// disjoint list
session1 = [['Alice', 'Baxter']];
session2 = [['Charles', 'Davis']];
console.log(hasRepeatTangoPartner(session1, session2) === false);

// partner mixing
session1 = [
  ['Alice', 'Baxter'],
  ['Charles', 'Davis'],
];
session2 = [
  ['Alice', 'Charles'],
  ['Baxter', 'Davis'],
];
console.log(hasRepeatTangoPartner(session1, session2) === false);

// more partner mixing
session1 = [
  ['Alice', 'Baxter'],
  ['Charles', 'Davis'],
  ['Jack', 'Daniels'],
];
session2 = [
  ['Jack', 'Charles'],
  ['Baxter', 'Davis'],
  ['Alice', 'Daniels'],
];
console.log(hasRepeatTangoPartner(session1, session2) === false);

// 1 overlap
session1 = [
  ['Alice', 'Baxter'],
  ['Charles', 'Davis'],
  ['Jack', 'Daniels'],
];
session2 = [
  ['Jack', 'Daniels'],
  ['Alice', 'Charles'],
  ['Baxter', 'Davis'],
];
console.log(hasRepeatTangoPartner(session1, session2) === true);

// overlap with flipped partners
session1 = [
  ['Alice', 'Baxter'],
  ['Charles', 'Davis'],
  ['Jack', 'Daniels'],
];
session2 = [
  ['Daniels', 'Jack'],
  ['Alice', 'Charles'],
  ['Baxter', 'Davis'],
];
console.log(hasRepeatTangoPartner(session1, session2) === true);

// no overlap
session1 = [
  ['Alice', 'Baxter'],
  ['Charles', 'Davis'],
  ['Jack', 'Daniels'],
];
session2 = [
  ['Jono', 'Paavo'],
  ['Zoe', 'Angus'],
  ['Oliver', 'Pixel'],
];
console.log(hasRepeatTangoPartner(session1, session2) === false);
