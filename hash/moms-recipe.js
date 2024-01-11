/*
'''
❓ PROMPT
You found a note from your mom when you got home from school:

"Hi sweetie, I need you to go to the store to pick up some ingredients for a recipe I'm making tonight. Don't buy anything we already have at home. I didn't have time to make the grocery list. Here's my credit card, buy something nice for yourself too. Love, Mom."

Example(s)
Recipe: {"butter": 4, "chicken thigh": 8, "garam masala": 1, "cumin powder": 2, "tomatoes": 4}
At home: {"salt": 1, "pepper": 1, "garam masala": 1, "heavy cream": 2, "butter": 2}
Grocery list: {"cumin powder": 2, "tomatoes": 4, "chicken thigh": 8, "butter": 2}

We ran out of chicken thigh, and this recipe calls for 8, so grab 8 of the biggest ones, sweetie.
We don't usually cook with cumin powder, so get 2, honey.
Pick up 4 tomatoes because we don't have any at home, dear.
Pick up 2 butter because we only have 2 at home, and the recipe calls for 4, sweetheart.
You can't substitute butter with heavy cream, sweetie. It'll mess up the flavor profile.
We don't need the salt and pepper at home. Let's set those aside, little one.
Don't include anything you're getting for yourself. That's our little secret.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(1)
 

📆 PLAN
Outline of algorithm #:

- iterate through the recipe list
  - if recipe item exists in home list, deduct the home value from recipe
 

🛠️ IMPLEMENT
function getGroceryList(recipeIngredients, ingredientsAtHome) {
def get_grocery_list(recipe_ingredients: dict, ingredients_at_home:dict) -> dict:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function getGroceryList(recipeIngredients, ingredientsAtHome) {
  for (const item in ingredientsAtHome) {
    if (recipeIngredients[item] === 1 && ingredientsAtHome[item] === 1) {
      delete recipeIngredients[item];
    }

    if (recipeIngredients[item] && recipeIngredients[item] > 1) {
      recipeIngredients[item] =
        recipeIngredients[item] - ingredientsAtHome[item];
    }
  }

  return recipeIngredients;
}

const recipe = {
  butter: 4,
  'chicken thigh': 8,
  'garam masala': 1,
  'cumin powder': 2,
  tomatoes: 4,
};
const home = {
  salt: 1,
  pepper: 1,
  'garam masala': 1,
  'heavy cream': 2,
  butter: 2,
};
// Grocery list: {"cumin powder": 2, "tomatoes": 4, "chicken thigh": 8, "butter": 2}

console.log(getGroceryList(recipe, home));
