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

// Problem 2
