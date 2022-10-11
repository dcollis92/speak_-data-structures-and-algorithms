/* 
 * 200. Number of Islands
 * 
 * Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * Input: grid = [
 *  ["1","1","1","1","0"],
 * ["1","1","0","1","0"],
 * ["1","1","0","0","0"],
 * ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Example 2:
 * Input: grid = [
 * ["1","1","0","0","0"],
 * ["1","1","0","0","0"],
 * ["0","0","1","0","0"],
 * ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
*/




























// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
 var numIslands = function(grid) {
  // count num of islands
  let counter = 0

  // helper function for ForLoops below
  const depthFirstSearch = function(i, j) {
    // edge case
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === '1'
    ) {
      // mark element as visited
      grid[i][j] = '0'
      // visited all surroundings
      depthFirstSearch(i + 1, j) //bottom
      depthFirstSearch(i, j + 1) //right
      depthFirstSearch(i - 1, j) //top
      depthFirstSearch(i, j - 1) //left
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // once it finds the island
      if (grid[i][j] === '1') {
        counter += 1
        depthFirstSearch(i, j)
      }
    } 
  }
  return counter
};