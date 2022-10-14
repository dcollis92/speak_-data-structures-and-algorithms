/* 
 * 148. Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * 
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * Example 2:
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 5 * 10**4].
 * -10**5 <= Node.val <= 10**5
 * 
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
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
 * @return {ListNode}
 */

var sortList = function (head) {
  // if the list is empty or has only one node, it is already sorted
  if (!head || !head.next) return head;

  // split the list into two halves
  let [left, right] = split(head);

  // sort each half
  left = sortList(left);
  right = sortList(right);

  // merge the two halves
  return merge(left, right);
}

//! HELPER FN split the list into two halves
function split(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  // while fast and fast.next are valid
  while (fast && fast.next) {
    // prev will be the tail of the first half
    prev = slow;
    // move the slow pointer one step
    slow = slow.next;
    // move the fast pointer two steps
    fast = fast.next.next;
  }

  // cut the list into two halves
  prev.next = null;

  // return the two halves
  return [head, slow];
};

//! HELPER FN merge two sorted lists
function merge(left, right) {
  // create a dummy head
  let dummy = new ListNode();
  // create a tail pointer
  let tail = dummy;

  // while both left and right are valid
  while (left && right) {
    // if the value of left is less than the value of right
    if (left.val < right.val) {
      // append left to the tail
      tail.next = left;
      // move left forward
      left = left.next;
    } else {
      // append right to the tail
      tail.next = right;
      // move right forward
      right = right.next;
    }

    // move the tail forward
    tail = tail.next;
  }

  // append the remaining nodes to the tail
  tail.next = left ? left : right;

  // return the dummy head's next node
  return dummy.next;
};

// Success
// Runtime: 331 ms, faster than 49.16% of JavaScript online submissions for Sort List.