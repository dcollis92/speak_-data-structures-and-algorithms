/*
 * 856. Score of Parentheses
 *
 * Given a balanced parentheses string s, return the score of the string.
 * The score of a balanced parentheses string is based on the following rule:
 *    () has score 1.
 *    AB has score A + B, where A and B are balanced parentheses strings.
 *    (A) has score 2 * A, where A is a balanced parentheses string.
 *
 * Example 1:
 * Input: s = "()"
 * Output: 1
 *
 * Example 2:
 * Input: s = "(())"
 * Output: 2
 *
 * Example 3:
 * Input: s = "()()"
 * Output: 2
 *
 * Constraints:
 * 2 <= s.length <= 50
 * s consists of only '(' and ')'.
 * s is a balanced parentheses string.
 */

/**
 * @param {string} s
 * @return {number}
 */

const scoreOfParentheses = function (s) {
  // 1. create an empty stack
  const stack = [];
  // 2. loop through the string
  for (const c of s) {
    // 3. if the character is '(', push 0 to the stack
    stack.push(c);
    // 4. else if the top element of the stack is 0, pop the top element and push 1 to the stack
    while (stack[stack.length - 1] === ")") {
      // 5. else if the top element of the stack is ')', pop the top element and push 2 * the top element to the stack
      stack.pop(); // ")"
      // 6. loop through the stack until the top element is '('
      if (stack[stack.length - 1] === "(") {
        // 7. pop the top element and push 2 * the top element to the stack
        stack.pop(); // "("
        // 8. if the top element of the stack is 0, pop the top element and push 1 to the stack
        stack.push(1);
        // 9. else if the top element of the stack is ')'
      } else {
        // 10. pop the top element and push 2 * the top element to the stack
        let num = stack.pop();
        // 11. if the top element of the stack is 0, pop the top element and push 1 to the stack
        while (stack[stack.length - 1] >= 1) {
          num += stack.pop();
        }
        stack.pop(); // "("
        // 12. push 2 * num to the stack
        stack.push(2 * num);
      }
    }
  }
  // 13. return the sum of all elements in the stack
  return stack.reduce((acc, a) => acc + a, 0);
};

// Success
// Runtime: 111 ms, faster than 18.28% of JavaScript online submissions for Score of Parentheses.
