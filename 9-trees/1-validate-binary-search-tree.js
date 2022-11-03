/*
 * 98. Validate Binary Search Tree
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *    The left subtree of a node contains only nodes with keys less than the node's key.
 *   The right subtree of a node contains only nodes with keys greater than the node's key.
 *  Both the left and right subtrees must also be binary search trees.
 *
 * -------------------------------------
 * Example 1:
 *    (2)
 *    / \
 * (1)   (3)
 * Input: root = [2,1,3]
 * Output: true
 *
 * Example 2:
 *   (5)
 *   / \
 * (1) (4)
 *     / \
 *   (3) (6)
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * -------------------------------------
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10**4].
 * -2**31 <= Node.val <= 2**31 - 1
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root) {
  // assign a helper function
  const helper = (node, min, max) => {
    // if the node is null
    if (!node) {
      // return true
      return true;
    }
    // if the node value is less than or equal to the min value
    if (node.val <= min) {
      // return false
      return false;
    }
    // if the node value is greater than or equal to the max value
    if (node.val >= max) {
      // return false
      return false;
    }
    // return the helper function
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  // return the helper function
  return helper(root, -Infinity, Infinity);
};

// Success
// Runtime: 130 ms, faster than 24.90% of JavaScript online submissions for Validate Binary Search Tree.

//! Alternate Solution

/*
var isValidBST = function(root) {
    if (!root) return true
    return validate(root, null, null)
};

function validate(node, min, max) {
    if (min !== null && node.val <= min) return false
    if (max !== null && node.val >= max) return false
    
    if (node.left && !validate(node.left, min, node.val)) return false
    if (node.right && !validate(node.right, node.val, max)) return false
    return true
}
*/
