/*

Backtracking

- exhauistively try every path (tree or solution)
- take a path, reach the end, take a step back
- navigate over a tree data structure


There are three students A, B, C

Find all possible seating arrangements (in a row) for these students!

[
  ["A", "B", "C"],
  ["C", "B", "A"],
  ...
]

*/

function arrangements() {
  const students = ['A', 'B', 'C'];

  const result = [];

  for (let s1 of students) {
    for (let s2 of students) {
      if (s2 === s1) continue;
      for (let s3 of students) {
        if (s3 == s2 || s3 == s1) continue;

        result.push([s1, s2, s3]);
      }
    }
  }

  return result;
}

console.log(arrangements());

/*

Given a list of N student names (unique), find all possible seating arrangements!

*/
function arrangements(students) {
  // create an output array of student seat lists
  const output = [];

  // recursive function: students, startingIdx, visited, seatingChart seating chart

  function helper(seatingChart, visited) {
    if (seatingChart.length === students.length) {
      output.push(seatingChart);
      return;
    }

    for (let s of students) {
      if (!visited.has(s)) {
        visited.add(s);
        seatingChart.push(s);
        helper(seatingChart, visited);
        visited.remove(s);
        seatingChart.pop();
      }
    }
  }

  helper([], new Set());

  return output;
}
// recursive loop
// -- base case len(seatingChart) == len(students)
//       - add seatingChart to output, return
// -- recursive case:
//       - iterate over every student, if student not in visited, recursive (update visted, update seatingChart)

// recursiveHelper(students, 0, )
// return output

function f(x, y) {
  if (y == 0) {
    return;
  }
  for (let i = 0; i < x; i++) {
    f(x, y - 1);
  }
}

function f2(y) {
  if (y == 0) {
    return;
  }

  f2(y - 1);
  f2(y - 1);
}

/*
                  f2(y-2)
        f2(y-1)   f2(y-2)
f2(y)  
        f2(y-1)   f2(y-2)
                  f2(y-2)
  
  1       2         4        8       16     32

=> O(2^y)

f(x, y) time = O(x^y)
*/
