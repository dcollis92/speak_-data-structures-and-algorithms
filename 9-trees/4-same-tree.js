/**
 * 100. Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Example 1:
 *    (1)         (1)
 *   /   \       /    \
 * (2)   (3)   (2)    (3)
 *
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Example 2:
 *   (1)    (1)
 *   /        \
 * (2)        (2)
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 * Example 3:
 *   (1)         (1)
 *  /   \       /   \
 * (2)  (1)   (1)   (2)
 *
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 * Constraints:
 * The number of nodes in both trees is in the range [0, 100].
 * -10**4 <= Node.val <= 10**4
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  // If both nodes are null, they are the same
  if (p === null && q === null) return true;
  // If one node is null and the other is not, they are not the same
  if (p === null || q === null) return false;
  // If the values of the nodes are not the same, they are not the same
  if (p.val !== q.val) return false;
  // If the values of the nodes are the same, check if the left and right subtrees are the same
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Success
// Runtime: 96 ms, faster than 44.73% of JavaScript online submissions for Same Tree.
