/*
 * 25. Reverse Nodes in k-Group
 *
 * Given the head of a linked list, reverse the nodes of a linked list k at a time, and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 *
 * -------------------------------------
 * Example 1:
 * (1)→(2)→(3)→(4)→(5)
 *          |
 *          V
 * (2)→(1)→(4)→(3)→(5)
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 * Example 2:
 * (1)→(2)→(3)→(4)→(5)
 *          |
 *          V
 * (3)→(2)→(1)→(4)→(5)
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 * -------------------------------------
 *
 * Constraints:
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 * Follow up: Can you solve the problem in O(1) extra memory space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  // assign the current node to the head
  let cur = head;
  // assign the counter to k
  let count = k;
  // while the counter is greater than 0 & the current node is not null
  while (count > 0 && cur) {
    // move the current node to the next node
    cur = cur.next;
    // decrement the counter
    count--;
  }
  // if the counter is equal to 0
  if (count === 0) {
    // assign the current node to the reverseKGroup function
    cur = reverseKGroup(cur, k);
    // while the counter is less than k
    while (count < k) {
      // assign a temp variable to the next node
      let temp = head.next;
      // assign the next node to the current node
      head.next = cur;
      // assign the current node to the head
      cur = head;
      // assign the head to the temp variable
      head = temp;
      // increment the counter
      count++;
    }
    // assign the head to the current node
    head = cur;
  }
  // return the head
  return head;
};

// Success
// Runtime: 94 ms, faster than 83.27% of JavaScript online submissions for Reverse Nodes in k-Group.
