/*
 * 682. Baseball Game
 *
 * You are keeping score for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
 * You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
 *
 * An integer x
 * - Record a new score of x.
 * "+"
 * - Record a new score that is the sum of the previous two scores.
 * "D"
 * - Record a new score that is double the previous score.
 * "C"
 * - Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the after applying all the operations.
 *
 * The test casesare generated such that the answer and all intermediate calcuations fit in a 32-bit integer and that all operations are valid.
 *
 * Example 1:
 * Input: ops = ["5","2","C","D","+"]
 * Output: 30
 * Explanation:
 * "5" - Add 5 to the record, record is now [5].
 * "2" - Add 2 to the record, record is now [5, 2].
 * "C" - Invalidate and remove the previous score, record is now [5].
 * "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
 * "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
 * The total sum is 5 + 10 + 15 = 30.
 *
 * Example 2:
 * Input: ops = ["5","-2","4","C","D","9","+","+"]
 * Output: 27
 * Explanation:
 * "5" - Add 5 to the record, record is now [5].
 * "-2" - Add -2 to the record, record is now [5, -2].
 * "4" - Add 4 to the record, record is now [5, -2, 4].
 * "C" - Invalidate and remove the previous score, record is now [5, -2].
 * "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
 * "9" - Add 9 to the record, record is now [5, -2, -4, 9].
 * "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
 * "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
 * The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
 *
 * Example 3:
 * Input: ops = ["1", "C"]
 * Output: 0
 * Explanation:
 * "1" - Add 1 to the record, record is now [1].
 * "C" - Invalidate and remove the previous score, record is now [].
 * Since the record is empty, the sum is 0.
 *
 * Constraints:
 * 1 <= ops.length <= 1000
 * operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 10**4, 3 * 10**4].
 * For operation "+", there will always be at least two previous scores on the record.
 * For operations "C" and "D", there will always be at least one previous score on the record.
 */

/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function (operations) {
  // create a stack to store the scores
  let stack = [];
  // iterate through the operations
  for (let i = 0; i < operations.length; i++) {
    // if the current operation is an integer
    if (Number.isInteger(parseInt(operations[i]))) {
      // push it to the stack
      stack.push(parseInt(operations[i]));
    } else if (operations[i] === "C") {
      // if the current operation is "C"
      // remove the last score from the stack
      stack.pop();
    } else if (operations[i] === "D") {
      // if the current operation is "D"
      // add the last score to the stack
      stack.push(stack[stack.length - 1] * 2);
    } else if (operations[i] === "+") {
      // if the current operation is "+"
      // add the last two scores to the stack
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  }
  // if the stack is empty, return 0
  if (stack.length === 0) return 0;

  // return the sum of all the scores
  return stack.reduce((a, b) => a + b);
};

// Success
// Runtime: 107 ms, faster than 41.60% of JavaScript online submissions for Baseball Game.
