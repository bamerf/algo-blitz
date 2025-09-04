/**

Generate all plus & minus expressions that equals target

Given a string that contains only digits from 0 to 9, and an integer value, *target*. Print all expressions which evaluate to *target* using the plus(+) and minus(-) binary operators between the digits.

You will likely need a helper function to recurse. You can use a loop within your recursive function because we're not monsters.
 

EXAMPLE(S)
generateExprs("123", 6) == ['1 + 2 + 3']
generateExprs("125", 7) == ['12 - 5']
generateExprs("420", 420) == ['420']
generateExprs("1210", 2) == ['1 + 2 - 1 + 0','1 + 2 - 1 - 0','12 - 10']

 */

function generateExprs(seq, target) {
  let results = [];

  function calculateExpr(currentExpr, currentIndex, total) {
    console.log(currentExpr);
    if (currentIndex === seq.length && total === target) {
      results.push(currentExpr);
      return;
    }

    // Loop to put operators (+, -) at all positions
    for (let i = currentIndex; i < seq.length; i++) {
      // Ignore numbers with a leading 0
      if (seq[currentIndex] === '0' && i !== currentIndex) {
        break;
      }

      // Grab 1+ chars for processing
      let segment = seq.substring(currentIndex, i + 1);
      let segmentValue = parseInt(segment);

      // If first index, only send the segment value since there is no second operand (and so no need for a + / -)
      if (currentIndex === 0) {
        calculateExpr(currentExpr + segment, i + 1, segmentValue);
        // Try + / - each time
      } else {
        calculateExpr(
          `${currentExpr} + ${segment}`,
          i + 1,
          total + segmentValue
        );
        calculateExpr(
          `${currentExpr} - ${segment}`,
          i + 1,
          total - segmentValue
        );
      }
    }
  }

  calculateExpr('', 0, 0);

  return results;
}

generateExprs('123', 6);
