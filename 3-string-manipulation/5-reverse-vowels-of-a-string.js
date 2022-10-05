/*
 * 345. Reverse Vowels of a String
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases more than once.
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * Constraints:
 * 1 <= s.length <= 3 * 10**5
 * s consist of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  // Create a string of vowels
  let strArr = s.split("");
  // Split the string into an array of characters
  let i = 0;
  // Create a pointer to the beginning of the array
  let j = strArr.length - 1;
  // Create a pointer to the end of the array
  while (i < j) {
    // While the two pointers have not met
    if (!vowels.includes(strArr[i])) {
      // If the character at the beginning pointer is not a vowel
      i++;
      // Move the beginning pointer forward
    } else if (!vowels.includes(strArr[j])) {
      // If the character at the end pointer is not a vowel
      j--;
      // Move the end pointer backward
    } else {
      // If the characters at both pointers are vowels
      [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
      // Swap the two characters
      i++;
      j--;
      // Move both pointers forward and backward
    }
  }
  return strArr.join("");
};

// Success
// Runtime: 162 ms, faster than 28.93% of JavaScript online submissions for Reverse Vowels of a String.
