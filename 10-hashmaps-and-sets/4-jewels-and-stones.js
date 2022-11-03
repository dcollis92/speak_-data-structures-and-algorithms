/**
 * 771. Jewels and Stones
 *
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 *
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * Constraints:
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

 var numJewelsInStones = function (jewels, stones) {
  // create a map
  let jewelsMap = {};
  // create a count variable
  let counter = 0;

  // iterate through the jewels
  for (let i = 0; i < jewels.length; i++) {
    // add the jewels to the map
    jewelsMap[jewels[i]] = jewelsMap[jewels[i]] + 1 || 1;
  }

  // iterate through the stones
  for (let i = 0; i < stones.length; i++) {
    // if the stone is in the map
    if (jewelsMap[stones[i]]) {
      // increment the counter
      counter += 1;
    }
  }
  // return the counter
  return counter;
};

