/*
'''
❓ PROMPT
In this game, a group of players stands in a circle and passes a parcel around.
When the game starts, a player is chosen to hold the parcel.
The players then pass the parcel to their adjacent player in clockwise order.
At a random point in time, a timer goes off, and the player holding the parcel is removed from the circle.
The passing continues until only one player is left.

Example(s)
We have a list  ["Alice", "Bob", "Charlie", "David", "Eve"]
Assume we have a timer value of 3.
Iteration 1: David removed
Iteration 2: Charlie removed
Iteration 3: Eve removed
Iteration 4: Bob Removed
Winner: Alice.


🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function passTheParcel(players, timer) {}
def passTheParcel(players, timer):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

timer = 4
index = 0
players length = 5
["Alice", "Bob", "Charlie", "David", "Eve"]

*/

function passTheParcel(players, timer) {
  let circle = players.slice();
  while (circle.length > 1) {
    // Pass the parcel to the next player
    for (let i = 0; i < timer; i++) {
      circle.push(circle.shift()); // push first element to the end of array
    }
    // Remove the player holding the parcel
    circle.shift();
  }
  return circle[0];
}

console.log(passTheParcel(['Alice', 'Bob', 'Charlie', 'David', 'Eve'], 3));

let players = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Test Case 1: Timer less than the number of players
let timer1 = players.length - 1;
let winner1 = passTheParcel(players, timer1);
console.log(winner1 === 'Bob');

// Test Case 2: Timer equal to the number of players
let timer2 = players.length;
let winner2 = passTheParcel(players, timer2);
console.log(winner2 === 'David');

// Test Case 3: Timer greater than the number of players
let timer3 = players.length + 2;
let winner3 = passTheParcel(players, timer3);
console.log(winner3 === 'Alice');

// Test Case 4: Timer less than 1
let timer4 = 0;
let winner4 = passTheParcel(players, timer4);
console.log(winner4 === 'Eve');
