/*
 * 23. Merge k Sorted Lists
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 * Example 2:
 * Input: lists = []
 * Output: []
 *
 * Example 3:
 * Input: lists = [[]]
 * Output: []
 *
 * Constraints:
 * k == lists.length
 * 0 <= k <= 10**4
 * 0 <= lists[i].length <= 500
 * -10**4 <= lists[i][j] <= 10**4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length won't exceed 10**4.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = function (lists) {
  // if the list is empty, return null
  if (lists.length === 0) return null;
  // if the list has only one element, return that element
  if (lists.length === 1) return lists[0];
  // divide the list into two halves
  let mid = Math.floor(lists.length / 2);
  let left = mergeKLists(lists.slice(0, mid));
  let right = mergeKLists(lists.slice(mid));
  return mergeTwoLists(left, right);
};

const mergeTwoLists = function (l1, l2) {
  // if either list is empty, return the other list
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  // if the first element of l1 is less than the first element of l2
  if (l1.val < l2.val) {
    // set the next element of l1 to the result of merging the rest of l1 and l2
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    // set the next element of l2 to the result of merging l1 and the rest of l2
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// Success
// Runtime: 183 ms, faster than 51.74% of JavaScript online submissions for Merge k Sorted Lists.
