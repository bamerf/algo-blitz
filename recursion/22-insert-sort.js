/*
'''
Insertion sort is a stable, in-place sorting algorithm that builds the final sorted list one item at a time. The partially sorted list initially contains only the first element in the list. With each iteration, one element is removed from the remaining unsorted portion of the list and inserted into the sorted portion.

This algorithm is normally implemented iteratively. Now we will do it recursively.

This session isn't so much about the Engineering Method. We already know what algorithm we're going to implement. We're going to deeply explore the relationship between loops and recursion. This is an exercise in thinking about an algorithm differently and building code crafting skills.

In Insertion Sort, there are two loops, one or both can be implemented with recursion. Start out with a goal of using recursion for one of the loops, and then making both loops recursive can be a stretch goal.

Starting out with a purely iterative solution and then refactoring can make this harder depending on the specifics of the initial implementation. It is likely easier to start thinking recursively from first principles and likely starting with the inner loop. How can a subproblem be peeled off?

As a follow-up, how can the values be sorted in descending order? As a more difficult follow-up, rather than only 1 loop being converted to using recursion, how can this algorithm be done completely with recursion?

A second option for a follow-up: is recursive selection sort. There's sample code of a recursive selection sort in the solution section.
 

EXAMPLE(S)
inputArr = [3, 8, 5, 4, 1, 9, -2]
insertionSort(inputArr)
inputArr == [-2, 1, 3, 4, 5, 8, 9]

inputArr = [5, 4, 3, 2, 1]
insertionSort(inputArr)
inputArr == [1, 2, 3, 4, 5]

inputArr = [8, 4, 6, 2]
insertionSort(inputArr)
inputArr == [2, 4, 6, 8]


FUNCTION SIGNATURE
// Javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {.  # mimic by recursive call 
    let currentValue = arr[i] -> mimic by a parameter in our recursive function
    let j = i - 1  -> mimic by a parameter in our recursive function 
    while (j >= 0 && arr[j] > currentValue) { -> logic in recursive function
      arr[j + 1] = arr[j] -> logic in recursive function
      j -= 1 -> mimic by a parameter in our recursive function 
    }
    arr[j + 1] = currentValue -> logic in recursive function
  }
}

if j >= 0 && arr[j] > currentValue: 
  arr[j + 1] = arr[j]
  recursive call here 
    - decrement our j parameter
else: 
  arr[j + 1] = currentValue

recursive call here 
    - increment our i parameter
    - update our current value parameter 

Recursion:
- base case(s)
  - if i >= length of array
- recursive case
  - some logic (if/else) -> mimics inner loop 

- outer loop -> mimic by calling our recursive function 


Parameters: arr, i, j, current value

# Python
def insertionSort(arr: list[int]) -> None:
  for i in range(1, len(arr)):
    current_value = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > current_value:
      arr[j+1] = arr[j]
      j -= 1
    arr[j+1] = current_value
'''

*/

function insertionSort(arr, i = 1, j = 0, temp = arr[i]) {
  if (arr.length < 2) return;
  if (i >= arr.length) return;

  if (j < 0 || arr[j] <= temp) {
    arr[j + 1] = temp;
  } else {
    arr[j + 1] = arr[j];
    insertionSort(arr, i, j - 1, temp);
  }

  insertionSort(arr, i + 1, i, arr[i + 1]);

  return arr;
}

console.log(insertionSort([2, 6, 3, 6, 1, 4]));
