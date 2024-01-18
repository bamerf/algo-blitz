/*
counter = 0
()()()(((())))

if(string[index] === "(" )
  counter++

if(string[index] === ")")
  counter --

if(counter < 0) {
  return false
}

if(counter === 0) {
  return true
}

retrun false
*/

function isBalancedMulti(string) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (Object.keys(map).includes(character)) {
      stack.push(character);
      continue;
    }

    const last = stack.pop();

    if (map[character] !== last) {
      return false;
    }

    if (stack.length === 0) {
      return true;
    }
  }
}

test1 = ')(';
test2 = '(){}';
test3 = '([{}])';
test4 = '(){}[]';

console.log(isBalancedMulti(test1) === false);
console.log(isBalancedMulti(test2) === true);
console.log(isBalancedMulti(test3) === true);
console.log(isBalancedMulti(test4) === true);
