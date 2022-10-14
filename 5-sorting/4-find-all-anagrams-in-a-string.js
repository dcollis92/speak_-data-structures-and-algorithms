/* 
 * 438. Find All Anagrams in a String
 *
 * Given two strings s and p, return an array of all the start indices of p's and anagrams in s. You may return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
 * 
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * 
 * Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * Constraints:
 * 1 <= s.length, p.length <= 3 * 10**4
 * s and p consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  let result = [];
  // create a map of the characters in p
  let pMap = new Map();
  // create a map of the characters in s
  let sMap = new Map();
  // iterate through p and add each character to the map
  for (let i = 0; i < p.length; i++) {
    // if the character is already in the map, increment the count
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
    // if the character is already in the map, increment the count
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  // if the maps are equal, add the index to the result
  if (compareMaps(pMap, sMap)) result.push(0);
  // iterate through s
  for (let i = p.length; i < s.length; i++) {
    // add the current character to the map
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    // remove the first character from the map
    sMap.set(s[i - p.length], sMap.get(s[i - p.length]) - 1);
    // if the count of the character is 0, remove it from the map
    if (sMap.get(s[i - p.length]) === 0) sMap.delete(s[i - p.length]);
    // if the maps are equal, add the index to the result
    if (compareMaps(pMap, sMap)) result.push(i - p.length + 1);
  }
  return result;
};

// helper function to compare two maps
function compareMaps(map1, map2) {
  // if the maps are not the same size, they are not equal
  if (map1.size !== map2.size) return false;
  // iterate through the keys of map1
  for (let [key, val] of map1) {
    // if the key is not in map2, return false
    if (map2.get(key) !== val) return false;
  }
  return true;
}