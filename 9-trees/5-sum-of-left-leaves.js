/**
 * 404. Sum of Left Leaves
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf node that is the left child of its parent.
 *
 * Example 1:
 *     (3)
 *    /   \
 * ((9))  (20)
 *        /  \
 *    ((15)) (7)
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
 *
 * Example 2:
 * Input: root = [1]
 * Output: 0
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 1000].
 * -1000 <= Node.val <= 1000
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
 * @return {number}
 */

var sumOfLeftLeaves = function (root) {
  // If the root is null, return 0
  if (root === null) return 0;
  // If the root has a left child and it is a leaf, return the value of the left child
  if (root.left && root.left.left === null && root.left.right === null) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  // If the root has a left child and it is not a leaf, return the sum of the left child and the sum of the right child
  if (root.left) {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
  // If the root does not have a left child, return the sum of the right child
  return sumOfLeftLeaves(root.right);
};

// Success
// Runtime: 85 ms, faster than 77.35% of JavaScript online submissions for Sum of Left Leaves.
