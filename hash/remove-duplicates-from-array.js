/*
'''
❓ PROMPT
A bug in the Formation session tool accidentally duplicated some Fellows in sessions. Given an array of names representing Fellows in a session, return an array of the distinct Fellows. The array must be in the same order as the input.
*/

const names = ['oliver', 'pixel', 'oliver', 'pinky'];

const unique = new Set(names);

console.log(unique); // Set { 'oliver', 'pixel', 'pinky' }

/*

Follow-up question:
How would removing the Fellows in place, instead of using a new output array, affect the algorithm's runtime?

Example(s)
["oliver", "pixel", "oliver", "pinky"] => ["oliver", "pixel", "pinky"]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function removeDuplicateFellows(fellows) {
def removeDuplicateFellows(fellows: list[str]) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
