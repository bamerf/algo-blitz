/*
Given an array of arrays representing relations  child, parent1, and parent2 in each row, print a string representing all children of each parent.
For example: Ben is the parent of James, Jen. The formatting doesn't matter as long as all children are represented in the final output. You will need to return the entire result as strings separated by newlines to match against the strings in these comparisons accurately.
return parentRelationships.join("\n") //javascript
return "\n".join(parentRelationships) #python
Example(s)
Input: []
Output: 'No family relations'

Input: [
  ["James", "Ben", "Lisa"],
  ["George", "Taylor", "Fred"],
  ["Jen", "Ben", "Gloria"]
]
Output:
'Ben is the parent of James, Jen'
'Lisa is the parent of James'
'Taylor is the parent of George'
'Fred is the parent of George'
'Gloria is the parent of Jen'
*/

function parentToChild(relations) {
  // Handle empty input case
  if (!relations.length) return 'No family relations';

  // Create a map to store parent -> children relationships
  const parentMap = new Map();

  // Process each relation
  relations.forEach(([child, parent1, parent2]) => {
    // Add child to parent1's list
    if (!parentMap.has(parent1)) {
      parentMap.set(parent1, new Set());
    }
    parentMap.get(parent1).add(child);

    // Add child to parent2's list
    if (!parentMap.has(parent2)) {
      parentMap.set(parent2, new Set());
    }
    parentMap.get(parent2).add(child);
  });

  // Convert map to required string format
  const result = [];
  for (const [parent, children] of parentMap) {
    result.push(`${parent} is the parent of ${[...children].join(', ')}`);
  }

  return result.join('\n');
}

let relations = [];
console.log(parentToChild(relations) === 'No family relations');

relations = [['James', 'Ben', 'Lisa']];
console.log(
  parentToChild(relations) ===
    '\
Ben is the parent of James\n\
Lisa is the parent of James'
);

relations = [
  ['James', 'Ben', 'Lisa'],
  ['George', 'Taylor', 'Fred'],
  ['Jen', 'Ben', 'Gloria'],
];
console.log(
  parentToChild(relations) ===
    '\
Ben is the parent of James, Jen\n\
Lisa is the parent of James\n\
Taylor is the parent of George\n\
Fred is the parent of George\n\
Gloria is the parent of Jen'
);

relations = [
  ['Justine', 'Tony', 'Jessica'],
  ['Paavo', 'Jessica', 'Tony'],
  ['Zoe', 'Jessica', 'Tony'],
  ['Benana', 'Ben', 'Ana'],
  ['Egg', 'Rooster', 'Hen'],
  ['Eggart', 'Duck', 'Hen'],
  ['Mule', 'Horse', 'Donkey'],
];
console.log(
  parentToChild(relations) ===
    '\
Tony is the parent of Justine, Paavo, Zoe\n\
Jessica is the parent of Justine, Paavo, Zoe\n\
Ben is the parent of Benana\n\
Ana is the parent of Benana\n\
Rooster is the parent of Egg\n\
Hen is the parent of Egg, Eggart\n\
Duck is the parent of Eggart\n\
Horse is the parent of Mule\n\
Donkey is the parent of Mule'
);
