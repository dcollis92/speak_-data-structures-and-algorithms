/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Constraints:
 * 1 <= strs.length <= 10**4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lower-case English letters.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  // create a map
  let map = {};
  // iterate through the strings
  for (let i = 0; i < strs.length; i++) {
    // sort the string
    let sortedStr = strs[i].split("").sort().join("");
    // if the sorted string is not in the map
    if (!map[sortedStr]) {
      // add the sorted string to the map
      map[sortedStr] = [];
    }
    // add the string to the map
    map[sortedStr].push(strs[i]);
  }
  // return the map
  return Object.values(map);
};
