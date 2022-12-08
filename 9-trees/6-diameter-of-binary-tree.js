/**
 * 543. Diameter of Binary Tree
 * 
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * 
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * 
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * Example 1:
 *     (1)
 *     /  \
 *   (2)  (3)
 *   / \
 * (4) (5)
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * Example 2:
 * Input: root = [1,2]
 * Output: 1
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10**4].
 * -100 <= Node.val <= 100
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
 * @param {TreeNode} root
 * @return {number}
*/

var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  // use dfs to find the longest path
  dfs(root);
  
  return diameter;
  
  function dfs(node) {
    // if the node is null, return 0
      if (!node) return 0;
      
      // find the longest path from left and right
      const left = dfs(node.left);
      const right = dfs(node.right);
      
      // update diameter at every node
      diameter = Math.max(diameter, left + right);

      // update the largest number of edge so far
      return 1 + Math.max(left, right);
  }
};

// Success
// Runtime: 67 ms, faster than 97.98% of JavaScript online submissions for Diameter of Binary Tree.