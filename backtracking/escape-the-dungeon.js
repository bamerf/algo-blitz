/*

In some interview settings, you won't be allowed to run you're code. In an in person interview (they still happen sometimes!) you might be required to write your code on a whiteboard. Some companies emulate this in a remote setting by giving you a shared editor without a runtime environment, just a plain text editor. For this problem, we're going to emulate this.
In a role playing game, our band of intrepid adventurers must escape a dungeon.  They've been dropped into a room somewhere without a map, so must explore the rooms as they encounter them.

You'll be given an instance of this Dungeon clas:
class Dungeon:
  - This gets the label of the room where the adventurers start
  +getStartingLocation(): number
  - Returns the list of rooms accessible from the given one
  +getNextRooms(location): list[number]
  - Is this room an exit?
  +isExit(location)
Your task is to use this instance to explore and find the room number (label) of the exit.
Since an implementation of this class isn't provided, you'll have to write your code given this interface. You COULD write your own Dungeon class and test this (and I recommend this!) but please write this code first without running it.
Example(s)
No example is provided. You have to trust that the Dungeon class does what it is supposed to! This function will be called after creating an instance of the Dungeon class.
Signature/Prototype
function escapeDungeon(dungeon)
def escape_dungeon(dungeon):

*/

// go through all possible paths until we find the exit
// recursive backtracking solution because we don't know how many nested rooms we have
// at any anchor point, we need to
// check if the current location is an exit, if yes we exit
// get current location words like an index that we increment
// get next rooms is like a subset that we pass into a recursive fn

function escapeDungeon(dungeon) {
  const visited = new Set();

  function helper(location) {
    // Check if current location is an exit
    if (dungeon.isExit(location)) {
      return location; // Return the exit room number
    }

    // Mark current location as visited to avoid cycles
    visited.add(location);

    // Get all accessible rooms from current location
    const nextRooms = dungeon.getNextRooms(location);

    // Explore each accessible room
    for (let i = 0; i < nextRooms.length; i++) {
      const nextRoom = nextRooms[i];

      // Skip if we've already visited this room
      if (!visited.has(nextRoom)) {
        const result = helper(nextRoom);
        if (result !== null) {
          return result; // Found the exit, return it
        }
      }
    }

    // No exit found from this path
    return null;
  }

  // Start from the starting location
  return helper(dungeon.getStartingLocation());
}
