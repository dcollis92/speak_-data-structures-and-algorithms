/*
 * 867. Transpose Matrix
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 *
 * [  2,  4, -1]     [ 2, -10,  18]
 * [-10,  5, 11]  => [ 4,   5,  -7]
 * [ 18, -7,  6]     [-1,  11,   6]
 *
 * Example 1:
 * Input:
 * matrix = [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * Output: [
 * [1,4,7],
 * [2,5,8],
 * [3,6,9]
 * ]
 *
 * Example 2:
 * Input: matrix = [
 * [1,2,3],
 * [4,5,6]
 * ]
 * Output: [
 * [1,4],
 * [2,5],
 * [3,6]
 * ]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 1 <= m * n <= 10**5
 * -109 <= matrix[i][j] <= 10**9
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function (matrix) {
  // create empty array
  let result = [];
  // iterate through matrix
  for (let i = 0; i < matrix.length; i++) {
    // iterate through subarray
    for (let j = 0; j < matrix[i].length; j++) {
      // if result[j] is undefined
      // i.e. if the item isn't in the result subArray already
      if (result[j] === undefined) {
        // create empty subArray
        result[j] = [];
      }
      // push matrix[i][j] to result[j]
      result[j].push(matrix[i][j]);
    }
  }
  return result;
};

// Success
// Runtime: 129 ms, faster than 27.33% of JavaScript online submissions for Transpose Matrix.
