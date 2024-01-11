/*
'''
❓ PROMPT
You found a note from your dad when you got home from school:

"Hey kiddo, I need you to go to the store to pick up some ingredients for a recipe I'm making tonight. Don't buy anything we already have at home. I didn't have time to make the grocery list. Here's my credit card. Thanks, Dad."

This problem takes two lists, the ingredients at home, and the recipe ingredients and determines what you need to buy at the store.

Example(s)
Recipe: ["pork butt", "salt", "pepper", "garlic powder"]
At home: ["pepper", "ham", "salt"]
Grocery list: ["pork butt", "garlic powder"]

We don't have pork butt or garlic powder at home, so make sure to buy it at the store, kiddo.
We have salt and pepper at home, so don't buy more, sport.
The ham isn't necessary for the recipe, kiddo.
You can do it, champ.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 

- initialize a set
- iterate through the at home and add to set
- iterate through recipe and add to set
- return set
 

🛠️ IMPLEMENT
function getGroceryList(recipeIngredients, ingredientsAtHome) {
def getGroceryList(recipeIngredients: list, ingredientsAtHome: list) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function getGroceryList(recipeIngredients, ingredientsAtHome) {
  const ingSet = new Set();
  const recSet = new Set();

  for (const homeIng of ingredientsAtHome) {
    ingSet.add(homeIng);
  }

  for (const recipeIng of recipeIngredients) {
    recSet.add(recipeIng);
  }

  const list = [];

  for (const item of recSet) {
    if (!ingSet.has(item)) {
      list.push(item);
    }
  }

  console.log(list);
}

let recipeIngredients1 = ['pork butt', 'salt', 'pepper', 'garlic powder'];
let ingredientsAtHome1 = ['pepper', 'ham', 'salt'];

getGroceryList(recipeIngredients1, ingredientsAtHome1);
