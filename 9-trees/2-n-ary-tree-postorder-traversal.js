/**
 * 590. N-ary Tree Postorder Traversal
 *
 * Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
 *
 * Example 1:
 *        (1)
 *      /  |  \
 *    (3) (2) (4)
 *   /  \
 * (5)  (6)
 *
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [5,6,3,2,4,1]
 *
 * Example 2:
 *       (1)
 *   /  /   \  \
 * (2) (3)  (4) (5)
 *     /\    |   |  \
 *   (6)(7) (8) (9) (10)
 *
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10]
 * Output: [6,7,3,2,8,9,10,5,4,1]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10**4].
 * 0 <= Node.val <= 10**4
 * The height of the n-ary tree is less than or equal to 1000.
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a Node.
 * function Node(val, children) {
 *   this.val = val;
 *   this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

var postorder = function (root) {
  // create an empty result array
  let result = [];
  // if root is null, return result
  if (!root) return result;
  // create a stack
  let stack = [root];
  // while stack is not empty
  while (stack.length) {
    // pop the stack
    let node = stack.pop();
    // push the node value to the result array
    result.unshift(node.val);
    // iterate through the children
    for (let i = 0; i < node.children.length; i++) {
      // push the children to the stack
      stack.push(node.children[i]);
    }
  }
  return result;
};

// Success
// Runtime: 126 ms, faster than 65.89% of JavaScript online submissions for N-ary Tree Postorder Traversal.
