function findFourQueensSolutions() {
  let results = [];

  function isGood(solution) {
    // Check if any queen can capture any other queen
    for (let i = 0; i < solution.length; i++) {
      for (let j = i + 1; j < solution.length; j++) {
        const [row1, col1] = solution[i];
        const [row2, col2] = solution[j];
        if (
          row1 === row2 || // Check if queens are in the same row
          col1 === col2 || // Check if queens are in the same column
          Math.abs(row1 - row2) === Math.abs(col1 - col2) // Check if queens are in the same diagonal
        ) {
          return false; // Not a valid solution
        }
      }
    }
    return true; // Valid solution
  }

  function shouldContinue(solution) {
    return solution.length < 4; // Continue until we have 4 queens placed
  }

  function helper(solution) {
    if (isGood(solution)) {
      results.push([...solution]);
    }

    if (!shouldContinue(solution)) return;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        solution.push([row, col]);
        helper(solution);
        solution.pop();
      }
    }
  }

  helper([]);
  return results;
}
