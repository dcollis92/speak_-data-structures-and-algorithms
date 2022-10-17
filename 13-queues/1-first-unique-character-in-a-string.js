/*
 * 387. First Unique Character in a String
 *
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 * Constraints:
 * 1 <= s.length <= 10**5
 * s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  // create a map to store the frequency of each character
  let map = {};
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // if the character is not in the map, set the value to 1
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      // if the character is in the map, increment the value by 1
      map[s[i]]++;
    }
  }
  // iterate through the string again
  for (let i = 0; i < s.length; i++) {
    // if the value of the current character is 1, return the index
    if (map[s[i]] === 1) {
      return i; // loop ends with first unique character
    }
  }
  // if no character is unique, return -1
  return -1;
};

// Success
// Runtime: 216 ms, faster than 19.73% of JavaScript online submissions for First Unique Character in a String.
