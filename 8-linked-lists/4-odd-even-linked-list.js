/*
 * 328. Odd Even Linked List
 *
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 *
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 * (1) -> (2) -> (3) -> (4) -> (5)
 *                |
 *                V
 * (1) -> (3) -> (5) -> (2) -> (4)
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 * Example 2:
 * (2) -> (1) -> (3) -> (5) -> (6) -> (4) -> (7)
 *                       |
 *                       V
 * (2) -> (3) -> (6) -> (7) -> (1) -> (5) -> (4)
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 * Constraints:
 * The number of nodes in the linked list is in the range [0, 10**4].
 * -10**6 <= Node.val <= 10**6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function (head) {
  // if head is null or head.next is null, return head
  if (!head) return null;
  // create odd and even pointers
  let odd = head;
  let even = head.next;
  // create evenHead pointer
  let evenHead = even;
  // while even and even.next are not null
  while (even && even.next) {
    // assign odd.next to even.next
    odd.next = even.next;
    // assign odd to odd.next
    odd = odd.next;
    // assign even.next to odd.next
    even.next = odd.next;
    // assign even to even.next
    even = even.next;
  }
  // if even is null, assign odd.next to evenHead
  odd.next = evenHead;
  return head;
};

// Success
// Runtime: 139 ms, faster than 14.12% of JavaScript online submissions for Odd Even Linked List.
