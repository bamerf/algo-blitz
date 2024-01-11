/*
'''
❓ PROMPT
You found a note from your brother when you got home from school:

"Doofus, go to the store to pick up some ingredients for my recipe. Don't buy anything we already have at home like last time. I didn't make the grocery list so you'll have to do it yourself and then go to the store to buy the missing ingredients, you lazy bum. Use your own money to pay for it; you owe me for only pranking you 5 times this week anyway. Get it done before dinnertime, loser."

Your brother's a jerk and gave you the recipe in the hardest possible way to decipher: one long line of all the quantities followed by all the ingredients. Meanwhile, the ingredients at home are in tabular format, ugh!

Example(s)
Recipe: "12 3 3 1 egGs baCon sAusaGe souRdoughBread"
At home: {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA"; 1}
Grocery list: {"eggs": 8, "sourdoughbread": 1}

You need 12 eggs but you only have 4 at home, so you need 8 more, dweeb.
You need 3 bacon and you have 3 at home, so you don't need anymore, dweeb.
You need 3 sausage and you have 6 at home, so you don't need anymore, dweeb.
You need 1 sourdoughbread but you have none at home, so you need 1 more, dweeb.
The banana isn't a part of the recipe, so it doesn't matter, dweeb.

Your brother swears he could do this so much faster than you, but he's got more important things to do like go grind the half-pipe with some gnarly shredz.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)

Example(s)
Recipe: "12 3 3 1 egGs baCon sAusaGe souRdoughBread"
At home: {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA"; 1}
Grocery list: {"eggs": 8, "sourdoughbread": 1}

length - 8
12 - 0


{eggs: 12}
 

📆 PLAN
Outline of algorithm #: 
- intialize a list hash object

- split recipe and itrate for the length of half the array
  - add to hash
  - add key (lowercase) which is the index plus half the length of the array
  - add value using current index

- iterate list hash
  - if home key (lowercase) exists in hash and hash value > home value, we deduct home from hash
  - if home exists and value is one we remove from hash




 

🛠️ IMPLEMENT
function getGroceryList(brosRecipe, ingredientsAtHome) {
def get_grocery_list(bros_recipe: str, ingredients_at_home:dict) -> dict:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Example(s)
// Grocery list: {"eggs": 8, "sourdoughbread": 1}

function getGroceryList(brosRecipe, ingredientsAtHome) {
  const list = {};

  const split = brosRecipe.split(' ');

  for (let i = 0; i < split.length / 2; i++) {
    const item = split[i];
    list[split[i + split.length / 2].toLowerCase()] = Number(item);
  }

  for (const item in ingredientsAtHome) {
    const homeItemKey = item.toLowerCase();

    const difference = list[homeItemKey] - home[item];

    if (
      (list[homeItemKey] === 1 && ingredientsAtHome[item] === 1) ||
      difference <= 0
    ) {
      delete list[homeItemKey];
    }

    if (list[homeItemKey] && list[homeItemKey] > 1) {
      list[homeItemKey] = difference;
    }
  }

  return list;
}

const recipe = '12 3 3 1 egGs baCon sAusaGe souRdoughBread';
const home = { SauSage: 6, EGgs: 4, BACoN: 3, banAnA: 1 };

// Grocery list: {"eggs": 8, "sourdoughbread": 1}

console.log(getGroceryList(recipe, home));
