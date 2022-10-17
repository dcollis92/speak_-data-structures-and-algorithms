/*
 * 844. Backspace String Compare
 *
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 * Example 2:
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 * Example 3:
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 * Constraints:
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  // 1. create a function to process the string
  const process = (str) => {
    // 2. create a empty array
    const stack = [];
    // 3. loop through the string
    for (const char of str) {
      // 4. if the character is not '#', push the character to the stack
      if (char !== "#") {
        stack.push(char);
      }
      // 5. else if the stack is not empty, pop the top element
      else if (stack.length) {
        stack.pop();
      }
    }
    // 6. return the stack as a string
    return stack.join("");
  };
  // 7. return the result of comparing the processed strings
  return process(s) === process(t);
};

// Success
// Runtime: 64 ms, faster than 95.87% of JavaScript online submissions for Backspace String Compare.