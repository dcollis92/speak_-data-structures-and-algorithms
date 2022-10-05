/*
 * 520. Detect Capital
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 *
 * - All letters in this word are capitals, like "USA".
 * - All letters in this word are not capitals, like "leetcode".
 * - Only the first letter in this word is capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 * Example 1:
 * Input: word = "USA"
 * Output: true
 *
 * Example 2:
 * Input: word = "FlaG"
 * Output: false
 *
 * Constraints:
 * 1 <= word.length <= 100
 * word consists of lowercase and uppercase English letters.
 */

/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
  return (
    word === word.toUpperCase() || 
    // All letters are capitals
    word === word.toLowerCase() ||
    // All letters are not capitals
    word === word[0].toUpperCase() + word.slice(1).toLowerCase()
    // Only the first letter is capital
  );
};

// Success
// Runtime: 96ms, faster than 62.24% of JavaScript online submissions for Detect Capital.
