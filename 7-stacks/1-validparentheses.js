/*
 * 20. Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding opening bracket of the same type.
 *
 * Example 1:
 * Input: "()"
 * Output: true
 *
 * Example 2:
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: "(]"
 * Output: false
 *
 * Constraints
 * 1 <= s.length <= 10**4
 * s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  // create an empty stack
  let stack = [];
  // create a map of opening and closing brackets
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // if the current character is an opening bracket
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      // push it to the stack
      stack.push(s[i]);
    } else {
      // if the current character is a closing bracket
      let last = stack.pop();
      // if the last opening bracket does not match the current closing bracket
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  // if the stack is empty, return true
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

// Success
// Runtime: 104 ms, faster than 50.12% of JavaScript online submissions for Valid Parentheses.
