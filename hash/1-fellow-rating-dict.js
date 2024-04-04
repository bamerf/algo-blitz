const map = [
  { oliver: 2, pixel: 1, pinky: 4 },
  { michael: 2, oliver: 3, pinky: 3 },
  { michael: 1, oliver: 1, pixel: 1 },
];

/**
- Return the Fellow with the highest average rating ("pinky")
- Return the Fellow with the lowest average rating ("pixel")
- Return the Fellow that was in the most number of sessions ("oliver")
- Return the Fellow with the most consistent rating ("pixel")
    - Can be the fewest number of ratings other than that fellow's most frequent
    - Can also be the lowest standard deviation from the mean
 */

function getFellowRatingDict(ratings) {
  const fellowRatingDict = {};

  for (const session of ratings) {
    for (const fellow in session) {
      if (!fellowRatingDict[fellow]) {
        fellowRatingDict[fellow] = [];
      }
      fellowRatingDict[fellow].push(session[fellow]);
    }
  }

  return fellowRatingDict;
}

console.log('getFellowRatingDict(map) :>> ', getFellowRatingDict(map));

function getFellowWithHighestAverageRating(ratings) {
  const fellowRatingDict = getFellowRatingDict(ratings);
  let highestAverage = -Infinity;
  let highestFellow = null;

  for (const fellow in fellowRatingDict) {
    const ratings = fellowRatingDict[fellow];
    const average = ratings.reduce((a, b) => a + b) / ratings.length;
    if (average > highestAverage) {
      highestAverage = average;
      highestFellow = fellow;
    }
  }

  return highestFellow;
}

console.log(
  'getFellowWithHighestAverageRating(map) :>> ',
  getFellowWithHighestAverageRating(map)
);

function getFellowWithLowestAverageRating(ratings) {
  const fellowRatingDict = getFellowRatingDict(ratings);
  let lowestAverage = Infinity;
  let lowestFellow = null;

  for (const fellow in fellowRatingDict) {
    const ratings = fellowRatingDict[fellow];
    const average = ratings.reduce((a, b) => a + b) / ratings.length;
    if (average < lowestAverage) {
      lowestAverage = average;
      lowestFellow = fellow;
    }
  }

  return lowestFellow;
}

console.log(
  'getFellowWithLowestAverageRating(map) :>> ',
  getFellowWithLowestAverageRating(map)
);

function getFellowInMostSessions(ratings) {
  const fellowRatingDict = getFellowRatingDict(ratings);
  let mostSessions = -Infinity;
  let mostFellow = null;

  for (const fellow in fellowRatingDict) {
    const sessions = fellowRatingDict[fellow].length;
    if (sessions > mostSessions) {
      mostSessions = sessions;
      mostFellow = fellow;
    }
  }

  return mostFellow;
}

console.log('getFellowInMostSessions(map) :>> ', getFellowInMostSessions(map));

function getFellowWithMostConsistentRating(ratings) {
  const fellowRatingDict = getFellowRatingDict(ratings);
  let mostConsistent = Infinity;
  let mostFellow = null;

  for (const fellow in fellowRatingDict) {
    const ratings = fellowRatingDict[fellow];
    const mean = ratings.reduce((a, b) => a + b) / ratings.length;
    const variance =
      ratings.reduce((a, b) => a + (b - mean) ** 2, 0) / ratings.length;
    if (variance < mostConsistent) {
      mostConsistent = variance;
      mostFellow = fellow;
    }
  }

  return mostFellow;
}

console.log(
  'getFellowWithMostConsistentRating(map) :>> ',
  getFellowWithMostConsistentRating(map)
);
