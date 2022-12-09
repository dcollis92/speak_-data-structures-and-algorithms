/**
 * 687. Longest Univalue Path
 *
 * Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.
 *
 * The length of the path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *     (5)
 *     / \
 *   (4) (5)
 *   / \   \
 * (1) (1) (5)
 * Input: root = [5,4,5,1,1,null,5]
 * Output: 2
 * Explanation: The shown image shows that the longest path of the same value (i.e. 5) is 2.
 *
 * Example 2:
 *     (1)
 *     / \
 *   (4) (5)
 *   / \   \
 * (4) (4) (5)
 * Input: root = [1,4,5,4,4,null,5]
 * Output: 2
 * Explanation: The shown image shows that the longest path of the same value (i.e. 4) is 2.
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10**4].
 * -1000 <= Node.val <= 1000
 * The depth of the tree will not exceed 1000.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestUnivaluePath = function (root) {
  // create a variable to store the longest path
  let longest = 0;
  // use dfs to find the longest path
  dfs(root);

  return longest;

  //helper function
  function dfs(node) {
    // if the node is null, return 0
    if (!node) return 0;

    // find the longest path from left and right
    const left = dfs(node.left);
    const right = dfs(node.right);

    // create a leftPath and rightPath counter
    let leftPath = 0;
    let rightPath = 0;

    // if the node has a left child and the value is the same as the node's value, increment leftPath
    if (node.left && node.left.val === node.val) {
      leftPath = left + 1;
    }

    // if the node has a right child and the value is the same as the node's value, increment rightPath
    if (node.right && node.right.val === node.val) {
      rightPath = right + 1;
    }

    // update longest path based on max of longest and leftPath + rightPath
    longest = Math.max(longest, leftPath + rightPath);

    // return the max of leftPath and rightPath
    return Math.max(leftPath, rightPath);
  }
};

// Success
// Runtime: 251 ms, faster than 97.18% of JavaScript online submissions for Longest Univalue Path.
