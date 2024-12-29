/*
Given an input dictionary mapping from the name of Fellows to their numerical skill rating, return the skill rating with the highest number of Fellows.
Example(s)
{"oliver": 3, "pixel": 1, "pinky": 3} => 3

*/

function highestSkillOverlap(fellowSkills) {
  if (fellowSkills.size === 0) {
    return null;
  }

  const skillHash = {};
  let highestSkillCount = 0;
  let highestSkill = null;

  for (const fellow in fellowSkills) {
    const skill = fellowSkills[fellow];
    skillHash[skill] = (skillHash[skill] || 0) + 1;
  }

  for (const skill in skillHash) {
    if (skillHash[skill] > highestSkillCount) {
      highestSkillCount = skillHash[skill];
      highestSkill = Number(skill);
    }
  }

  return highestSkill;
}

console.log(highestSkillOverlap({ oliver: 3, pixel: 1, pinky: 3 }) == 3);
console.log(highestSkillOverlap(new Map()) === null);

let fellowSkills = { oliver: 3 };
console.log(highestSkillOverlap(fellowSkills) === 3);

fellowSkills = { oliver: 3, tobey: 3 };
console.log(highestSkillOverlap(fellowSkills) === 3);

fellowSkills = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(
  highestSkillOverlap(fellowSkills) >= 1 &&
    highestSkillOverlap(fellowSkills) <= 4
);

fellowSkills = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(highestSkillOverlap(fellowSkills) === 1);

fellowSkills = { tony: 3, jess: 1, paavo: 2, zoe: 1, jono: 2, angus: 3 };
console.log(
  highestSkillOverlap(fellowSkills) >= 1 &&
    highestSkillOverlap(fellowSkills) <= 3
);
