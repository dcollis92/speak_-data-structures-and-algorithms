/* 
 * 242. Valid Anagram
 *
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10**4
 * s and t consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */ 

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // If s and t are not the same length, return false
  const map = {};
  // Create a map
  for (let i = 0; i < s.length; i++) {
    // Iterate through s
    map[s[i]] = map[s[i]] + 1 || 1;
    // Add the current character to the map, or increment the value if it already exists
  }
  for (let i = 0; i < t.length; i++) {
    // Iterate through t
    if (!map[t[i]]) return false;
    // If the current character is not in the map, return false
    map[t[i]]--;
    // Decrement the value of the current character in the map
  }
  return true;
  // Return true
}