/*
'''
❓ PROMPT
You found a note from your brother when you got home from school:

"Doofus, go to the store to pick up some ingredients for my recipe. Don't buy anything we already have at home like last time. I didn't make the grocery list so you'll have to do it yourself and then go to the store to buy the missing ingredients, you lazy bum. Use your own money to pay for it; you owe me for only pranking you 5 times this week anyway. Get it done before dinnertime, loser."

Your brother's a jerk and gave you the recipe in the hardest possible way to decipher: one long line of all the quantities followed by all the ingredients. Meanwhile, the ingredients at home are in tabular format, ugh!

Example(s)
Recipe: "12 3 3 1 egGs baCon sAusaGe souRdoughBread"
At home: {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA": 1}
Grocery list: {"eggs": 8, "sourdoughbread": 1}

You need 12 eggs but you only have 4 at home, so you need 8 more, dweeb.
You need 3 bacon and you have 3 at home, so you don't need anymore, dweeb.
You need 3 sausage and you have 6 at home, so you don't need anymore, dweeb.
You need 1 sourdoughbread but you have none at home, so you need 1 more, dweeb.
The banana isn't a part of the recipe, so it doesn't matter, dweeb.

Your brother swears he could do this so much faster than you, but he's got more important things to do like go grind the half-pipe with some gnarly shredz.
 

🔎 EXPLORE
List your assumptions & discoveries:

- the recipe could be divided by half because the number of items and names are equal
- divide the recipe by space
- first half is numbers, second is ingredients
- loop through the ingredients
- check if igredient exists in hash of home, careful about casing
- if exists deduct and add to shopping list, otherwise create ingredient in shopping list
- return shopping list
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function getGroceryList(brosRecipe, ingredientsAtHome) {
def get_grocery_list(bros_recipe: str, ingredients_at_home:dict) -> dict:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function getGroceryList(brosRecipe, ingredientsAtHome) {
  // '4 8 1 10 2 bUtTeR hIcKoRyWoOdChIpS pApRiKa BeEfBrIsKeT bRoWnSuGaR';

  // - divide the recipe by space
  const recipeArray = brosRecipe.split(' ');

  // - first half is numbers, second is ingredients
  const mid = recipeArray.length / 2;
  const quantities = recipeArray.slice(0, mid);
  const ingredients = recipeArray.slice(mid);

  const gorceryList = {};

  // - loop through the ingredients
  for (let [index, ingredient] of ingredients.entries()) {
    const lowerCaseIngredient = ingredient.toLowerCase();
    const numOfItemsAtHome = ingredientsAtHome[lowerCaseIngredient];

    // - check if igredient exists in hash of home, careful about casing
    // - if exists deduct and add to shopping list, otherwise create ingredient in shopping list
    if (numOfItemsAtHome) {
      gorceryList[lowerCaseIngredient] = quantities[index] - numOfItemsAtHome;
    } else {
      gorceryList[lowerCaseIngredient] = quantities[index];
    }
  }

  // - return shopping list
  return gorceryList;
}

function isEqual(list1, list2) {
  if (list1.length != list2.length) return false;

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) return false;
  }

  return true;
}

// Test Case 1: No ingredients anywhere
const recipe_1 = '';
const home_1 = {};
const grocery_list_1 = {};
console.log(isEqual(getGroceryList(recipe_1, home_1), grocery_list_1));

// Test Case 2: No ingredients at home
const recipe_2 = '2 8 1 1 eGgS pOrKlOiNcHoPs PaNkObReAdCrUmBs FlOuR';
const home_2 = {};
const grocery_list_2 = {
  eggs: 2,
  porkloinchops: 8,
  pankobreadcrumbs: 1,
  flour: 1,
};
console.log(isEqual(getGroceryList(recipe_2, home_2), grocery_list_2));

// Test Case 3: Some ingredients at home
const recipe_3 =
  '4 8 1 10 2 bUtTeR hIcKoRyWoOdChIpS pApRiKa BeEfBrIsKeT bRoWnSuGaR';
const home_3 = { sAlT: 1, pEPper: 1, paPRika: 1, bUTteR: 2 };
const grocery_list_3 = {
  beefbrisket: 10,
  brownsugar: 2,
  hickorywoodchips: 8,
  butter: 2,
};
console.log(isEqual(getGroceryList(recipe_3, home_3), grocery_list_3));

// Test Case 4: All ingredients at home
const recipe_4 = '2 4 1 2 2 BuTtEr SaLmOnFiLlEtS lEmOn OrEgAnO pArSlEy';
const home_4 = {
  butTer: 2,
  saLmoNfiLLets: 4,
  leMOn: 1,
  oREGano: 2,
  pARsLey: 2,
};
const grocery_list_4 = {};
console.log(isEqual(getGroceryList(recipe_4, home_4), grocery_list_4));

// Test Case 5: Unneeded ingredients at home
const recipe_5 = '4 8 1 2 4 bUtTeR cHiCkEnDrUmStIcK gArLiC rOsEmArY oNiOn';
const home_5 = {
  sALt: 1,
  pePpeR: 1,
  GaRlic: 2,
  heAvYcrEaM: 2,
  bUtTer: 6,
  oNiOn: 6,
};
const grocery_list_5 = { rosemary: 2, chickendrumstick: 8 };
console.log(isEqual(getGroceryList(recipe_5, home_5), grocery_list_5));
