/*

1. Given a person's name, return a list of all of the friends of their friends (2nd order friends)

2. Given a person's name and a positive number, n, greater than 0, return the nth order friends. For n = 1, that is the person's direct friends. For n = 2, this gives the same result as the first problem.

{
  "Daniel": ["Mike", "Sophie", "James", "Tony"],
  "Mike": ["Daniel", "James", "Luke"],
  "Tony": ["Daniel", "Sophie"],
  "Sophie": ["Mike", "Daniel", "Tony", "Eun Ji"],
  "Eun Ji": ["Sophie"],
  "James": ["Daniel", "Mike"],
  "Luke": ["Mike"]
}

*/

const friends = {
  Daniel: ['Mike', 'Sophie', 'James', 'Tony'],
  Mike: ['Daniel', 'James', 'Luke'],
  Tony: ['Daniel', 'Sophie'],
  Sophie: ['Mike', 'Daniel', 'Tony', 'Eun Ji'],
  'Eun Ji': ['Sophie'],
  James: ['Daniel', 'Mike'],
  Luke: ['Mike'],
};

// Problem 1
function findSuggestedFriends(friends, person) {
  const suggestedFriends = new Set();
  const firstOrder = friends[person];

  console.log(firstOrder);

  for (let friend of firstOrder) {
    const friendOfFriends = friends[friend];

    for (let secondOrder of friendOfFriends) {
      if (secondOrder !== person && !firstOrder.includes(secondOrder)) {
        suggestedFriends.add(secondOrder);
      }
    }
  }
  return Array.from(suggestedFriends);
}

console.log(findSuggestedFriends(friends, 'Daniel', 1));

/* Problem 2

2. Given a person's name and a positive number, n, greater than 0, return the nth order friends. For n = 1, that is the person's direct friends. For n = 2, this gives the same result as the first problem.

const friends = {
  Daniel: ['Mike', 'Sophie', 'James', 'Tony'],
  Mike: ['Daniel', 'James', 'Luke'],
  Tony: ['Daniel', 'Sophie'],
  Sophie: ['Mike', 'Daniel', 'Tony', 'Eun Ji'],
  'Eun Ji': ['Sophie'],
  James: ['Daniel', 'Mike'],
  Luke: ['Mike'],
};

name = Daniel
depth 1 = [Mike, Sophie, James, Tony]
depth 2 = [Luke, Eun Ji]
depth 3 unfiltered = [James, Luke, Mike, Tony, Eun Ji, Sophie]

name = Daniel
friendsToLoopOver = 
depth = 3


#fn

visitedFriends = new Set()
queue = [daniel]

if(n === 0) {
  return name
} else {
  helper(queue, n, friends, visited)
}

#helper
if(queue.lenght === 0 || n === 0) {
  return visited
}

newQueue

while (queue.length > 0) {
  currentFriend = queue.pop()
  visited.add(currentfriend)
  const friendsOfFriends = friends[currentFriend]

  for each friend of current friend
    if(!visited.has(friend)) {
      queue.unshift(friend)
    }
}

helper(n - 1, friends, visited)

*/

function helper(queue, depth, friends, visitedFriends) {
  if (queue.length === 0 || depth < 0) {
    return visitedFriends;
  }

  let newQueue = [];

  while (queue.length > 0) {
    const currentFriend = queue.pop();

    visitedFriends.add(currentFriend);

    const friendOfFriends = friends[currentFriend];

    for (let friend of friendOfFriends) {
      if (!visitedFriends.has(friend)) {
        newQueue.unshift(friend);
      }
    }
  }

  return helper(newQueue, depth - 1, friends, visitedFriends);
}

function findSuggestedFriendsWithDepth(friends, name, depth) {
  const visitedFriends = new Set();
  const queue = [name];

  return helper(queue, depth, friends, visitedFriends);
}

// [ 'Mike', 'Sophie', 'James', 'Tony' ]
console.log(findSuggestedFriendsWithDepth(friends, 'Daniel', 1));

// [ Daniel, James, Luke, Mike, Tony, Eun Ji, Sophie ]
console.log(findSuggestedFriendsWithDepth(friends, 'Daniel', 2));

console.log(findSuggestedFriendsWithDepth(friends, 'Daniel', 3));
