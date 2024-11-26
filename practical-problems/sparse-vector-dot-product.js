/*
'''
❓ PROMPT
In mathematics, a vector is a list of numbers. A sparse vector is one where most of the individual values are zero.

The dot product of two equal size vectors is sum of the products of the individual elements. For vectors [1, 2, 3] and [4, 5, 6], the dot product can be computed as:

1*4 + 2*5 + 3*6 = 32

multiplying the first, second, and third elements respectively, then adding them.

Write a simple SparseVector class that represents a sparse vector efficiently and supports a dotProduct() method that accepts a second SparseVector as input.

Example(s)
Example:
v1 = SparseVector([1, 0, 0, 2, 3])
v2 = SparseVector([0, 3, 0, 4, 0])
print(v1.dotProduct(v2))  # Expected: 8
1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

v1 = SparseVector([0, 1, 0, 0, 0])
v2 = SparseVector([0, 0, 0, 0, 2])
print(v1.dotProduct(v2))  # Expected: 0
0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
 

🔎 EXPLORE
List your assumptions & discoveries:

- SparceVector just returns the array
- dotProduct takes one input as array
- nested loop where each item of array one is multiplied by same index item in array two
- add the sum to total
- return total after the loop

 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
class SparseVector:
    def __init__(self, nums: List[int]):
    def dotProduct(self, vec: SparseVector) -> int       

class SparseVector {
    constructor(nums)
    dotProduct(vec) 
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function SparseVector(nums) {
  const vector = nums;

  // - SparceVector returns method
  return {
    // - dotProduct takes one input as array
    dotProduct: function (otherVector) {
      let sum = 0;
      const otherNums = otherVector.nums;

      // - nested loop where each item of array one is multiplied by same index item in array two
      for (let i = 0; i < vector.length; i++) {
        sum += vector[i] * otherNums[i];
      }

      // - return total after the loop
      return sum;
    },
    nums: vector,
  };
}

let v1 = new SparseVector([1, 0, 0, 2, 3]);
let v2 = new SparseVector([0, 3, 0, 4, 0]);
console.log(v1.dotProduct(v2) === 8);

v1 = new SparseVector([1, 2, 3]);
v2 = new SparseVector([4, 5, 6]);
console.log(v1.dotProduct(v2) === 32);

v1 = new SparseVector([1, 0, 0, 0]);
v2 = new SparseVector([0, 2, 3, 4]);
console.log(v1.dotProduct(v2) === 0);

v1 = new SparseVector([0, 0, 0]);
v2 = new SparseVector([1, 2, 3]);
console.log(v1.dotProduct(v2) === 0);

v1 = new SparseVector([0, 3, 0, 0, 0, 0, 0]);
v2 = new SparseVector([0, 2, 0, 0, 0, 4, 5]);
console.log(v1.dotProduct(v2) === 6);

v1 = new SparseVector([]);
v2 = new SparseVector([]);
console.log(v1.dotProduct(v2) === 0);

v1 = new SparseVector([0, 0, 2, 0, 5]);
v2 = new SparseVector([0, 3, 2, 0, 0]);
console.log(v1.dotProduct(v2) === 4);

v1 = new SparseVector([1, 0, 0, 0, 2, 0]);
v2 = new SparseVector([0, 0, 0, 3, 0, 4]);
console.log(v1.dotProduct(v2) === 0);

v1 = new SparseVector([7]);
v2 = new SparseVector([0]);
console.log(v1.dotProduct(v2) === 0);
