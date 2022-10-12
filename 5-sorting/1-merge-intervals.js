/*
 * 56. Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [
 * [1,3], [2,6],
 * [8,10],[15,18]
 * ]
 * Output: [
 * [1,6], [8,10], [15,18]
 * ]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 * Input: intervals =
 * [[1,4], [4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Constraints:
 * 1 <= intervals.length <= 10**4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10**4
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  // sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // merge the intervals in a new array
  let merged = [];
  for (let interval of intervals) {
    // if the last interval in the merged array does not overlap with the current interval, push it to the merged array
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      // otherwise, there is overlap, so we merge the current and previous intervals
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }
  return merged;
};

// Success
// Runtime: Runtime: 149 ms, faster than 75.83% of JavaScript online submissions for Merge Intervals.
