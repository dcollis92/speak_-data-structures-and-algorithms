/**
 * 513. Find Bottom Left Tree Value
 *
 * Given the root of a binary tree, return the leftmost value in the last row of the tree.
 *
 * Example 1:
 *    (2)
 *   /   \
 * (1)   (3)
 *
 * Input: root = [2,1,3]
 * Output: 1
 *
 * Example 2:
 *     (1)
 *     / \
 *   (2) (3)
 *   /   / \
 * (4) (5) (6)
 *     /
 *   (7)
 * Input: root = [1,2,3,4,null,5,6,null,null,7]
 * Output: 7
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10**4].
 * -2**31 <= Node.val <= 2**31 - 1
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var findBottomLeftValue = function (root) {
  // Create a queue and add the root node
  const queue = [root];
  // Create a variable to store the leftmost value
  let leftmostValue;
  // While the queue is not empty
  while (queue.length > 0) {
    // Get the length of the queue
    const length = queue.length;
    // Loop through the queue
    for (let i = 0; i < length; i++) {
      // Get the current node
      const node = queue.shift();
      // If it is the first node in the current level, set it as the leftmost value
      if (i === 0) leftmostValue = node.val;
      // If the current node has a left child, add it to the queue
      if (node.left) queue.push(node.left);
      // If the current node has a right child, add it to the queue
      if (node.right) queue.push(node.right);
    }
  }
  // Return the leftmost value
  return leftmostValue;
};

// Success
// Runtime: 115 ms, faster than 53.59% of JavaScript online submissions for Find Bottom Left Tree Value.
