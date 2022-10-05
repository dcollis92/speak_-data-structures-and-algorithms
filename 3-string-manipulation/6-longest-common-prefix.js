/*
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  // If strs is an empty array, return an empty string
  let prefix = strs[0];
  // Set prefix to the first string in strs
  for (let i = 1; i < strs.length; i++) {
    // Iterate through strs
    while (strs[i].indexOf(prefix) !== 0) {
      // While the prefix is not a substring of the current string
      prefix = prefix.substring(0, prefix.length - 1);
      // Remove the last character from the prefix
      if (prefix.length === 0) return "";
      // If the prefix is an empty string, return an empty string
    }
  }
  return prefix;
  // Return the prefix

};
