/* 
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * (1 -> 2 -> 3 -> 4 -> 5)
 *           |
 *           V
 * (5 -> 4 -> 3 -> 2 -> 1)
 * Input: head = [1,2,3,4,5]
 * Output:       [5,4,3,2,1]
 * 
 * Example 2:
 * (1 -> 2)
 *    |
 *    V
 * (2 -> 1)
 * Input: head = [1,2]
 * Output:       [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output:       []
 * 
 * Constraints:
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 * 
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *  this.next = (next===undefined ? null : next)
 * }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
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

  // 7. reassign the next of the dummy head to the head
  newHead.next = head;

  // 8. while the next of the pointer is not null
  while (now.next) {
    // 9. reassign the temp pointer to the next of the pointer
    tmp = now.next;
    // 10. reassign the next of the pointer to the next of the temp pointer
    now.next = tmp.next;
    // 11. reassign the next of the temp pointer to the next of the reverse head
    tmp.next = reverseHead;
    // 12. reassign the reverse head to the temp pointer
    reverseHead = tmp;
  }

  // 13. reassign the next of the dummy head to the reverse head
  newHead.next = reverseHead;

  // 14. return the next of the dummy head
  return newHead.next;

}