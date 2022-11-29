/**
 * 872. Leaf-Similar Trees
 *
 * Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
 *
 *        (3)
 *      /      \
 *    (5)       (1)
 *    /  \     /    \
 * ((6)) (2) ((9)) ((8))
 *     /  \
 *  ((7)) ((4))
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 *
 * Example 1:
 *         (3)                      (3)
 *       /      \                 /      \
 *    (5)        (1)           (5)        (1)
 *    /  \      /   \         /   \      /    \
 * ((6)) (2) ((9)) ((8))   ((6)) ((7)) ((4))  (2)
 *    /  \                              /  \
 * ((7)) ((4))                      ((9)) ((8))
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4],
 *        root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Example 2:
 *    (1)            (1)
 *   /    \        /     \
 * ((2)) ((3))   ((3))  ((2))
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 *
 * Constraints:
 * The number of nodes in each tree will be in the range [1, 200].
 * Both of the given trees will have values in the range [0, 200].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function (root1, root2) {
  // create an 2 empty leaves array
  let leaves1 = [];
  let leaves2 = [];
  // call dfs on the root1 and leaves1
  dfs(root1, leaves1);
  // call dfs on the root2 and leaves2
  dfs(root2, leaves2);
  // return true if leaves1 is equal to leaves2
  return (
    leaves1.length == leaves2.length &&
    leaves1.every((v, i) => v === leaves2[i])
  );
};

// Depth First Search
dfs = function (node, leaves) {
  // if node is not null
  if (node != null) {
    // if left node is null and right node is null
    if (node.left == null && node.right == null) {
      // push the node value to the leaves array
      leaves.push(node.val);
    }
    // call dfs on the left node
    dfs(node.left, leaves);
    // call dfs on the right node
    dfs(node.right, leaves);
  }
};

// Success
// Runtime: 86 ms, faster than 79.45% of JavaScript online submissions for Leaf-Similar Trees.
