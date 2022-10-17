/*
 * 92. Reverse Linked List II
 *
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Example 1:
 * (1 -> 2 -> 3 -> 4 -> 5)
 *            |
 *            V
 * (1 -> 4 -> 3 -> 2 -> 5)
 * Input: head = [1,2,3,4,5],
 * left = 2, right = 4
 * Output: [1,4,3,2,5]
 *
 * Example 2:
 * Input: head = [5],
 * left = 1, right = 1
 * Output: [5]
 *
 * Constraints:
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 * Follow up: Could you do it in one pass?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, m, n) {
  // 1. create a dummy head
  var newHead = new ListNode(0);
  // 2. create a pointer to the dummy head
  var now = newHead;
  // 3. create a temp pointer
  var tmp = null;
  // 4. reverseLast is the last node of the reversed list
  var reverseLast = null;
  // 5. reverseHead is the first node of the reversed list
  var reverseHead = null;
  // 6. reverseNow is the current node of the reversed list
  var reverseNow = null;
  // 7. i is the index of the current node
  var i = 0;

  // 8. reassign the next of the dummy head to the head
  newHead.next = head;

  // 9. while the pointer is not null
  while (now) {
    // 10. assign tmp to the next of the pointer
    tmp = now.next;

    // 11. if the index is less than m
    if (i === m - 1) {
      // 12. assign reverseHead to the pointer
      reverseHead = now;
    }

    // 13. if the index equals m
    if (i === m) {
      // 14. assign reverseLast to the pointer
      reverseLast = now;
      // 15. assign reverseNow to the pointer
      reverseNow = now;
    }

    // if the index is greater than m and less than n
    if (i > m && i <= n) {
      // 16. assign the next of the pointer to the reverseNow pointer
      now.next = reverseNow;
      //  17. assign reverseNow to the pointer
      reverseNow = now;
    }

    // 18. if the index equals n
    if (i === n) {
      // 19. assign the next of the reverseLast to the tmp
      reverseLast.next = tmp;
      // 20. assign the next of the reverseHead to the reverseNow
      reverseHead.next = reverseNow;
    }

    // 21. move to the next node
    now = tmp;
    // 22. increment the index
    i++;
  }

  // 23. return the next of the dummy head
  return newHead.next;
};

// Success
// Runtime: 96 ms, faster than 49.20% of JavaScript online submissions for Reverse Linked List II.
