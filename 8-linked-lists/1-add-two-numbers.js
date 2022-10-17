/*
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: (2 -> 4 -> 3) +
 *        (5 -> 6 -> 4)
 * Output:(7 -> 0 -> 8)
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9],
 *        l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {
  // 1. create a new linked list
  let carry = 0;
  // 2. create a dummy head
  let result = new ListNode();
  // 3. create a pointer to the dummy head
  let current = result;
  // 4. loop through the linked list
  while (l1 || l2) {
    // 5. get the value of the current node
    let sum = carry;
    if (l1) {
      // 6. add the value of the current node to the sum
      sum += l1.val;
      // 7. move to the next node
      l1 = l1.next;
    }
    if (l2) {
      // 8. add the value of the current node to the sum
      sum += l2.val;
      // 9. move to the next node
      l2 = l2.next;
    }
    // 10. update the carry
    carry = Math.floor(sum / 10);
    // 11. create a new node with the sum
    current.next = new ListNode(sum % 10);
    // 12. move to the next node
    current = current.next;
  }
  // 13. check if there is a carry
  if (carry) {
    // 14. add a new node with the carry
    current.next = new ListNode(carry);
  }
  // 15. return the dummy head
  return result.next;
};

// Success
// Runtime: 155 ms, faster than 71.56% of JavaScript online submissions for Add Two Numbers.
