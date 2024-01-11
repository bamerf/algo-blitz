/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 

27 -> 3 % 3 % 3 = 1

inticialize result var
return true if n equals 1
call recirsive function and divide argument by 3
return false
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function powerOfThree(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  }

  return powerOfThree(n / 3);
}

console.log(powerOfThree(27));
