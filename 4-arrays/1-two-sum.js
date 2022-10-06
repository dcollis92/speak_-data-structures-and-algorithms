/*
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 10**4
 * -10**9 <= nums[i] <= 10**9
 * -10**9 <= target <= 10**9
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  // Create a map to store the numbers and their indices
  for (let i = 0; i < nums.length; i++) {
    // Iterate through the array
    if (map.has(target - nums[i])) {
      // If the map has the difference between the target and the current number
      return [map.get(target - nums[i]), i];
      // Return the index of the difference and the current index
    }
    map.set(nums[i], i);
    // Add the current number and its index to the map
  }
};

// Success
// Runtime: 102 ms, faster than 75.45% of JavaScript online submissions for Two Sum.

//! Old Solution
/* 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 var twoSum = function(nums, target) {
  // initialize an empty object
  const indices = {};

  nums.forEach((item, idx) => {
    indices[item] = idx
  });

  for (let idx = 0; idx < nums.length; idx++) {
    const compliment = target - nums[idx];
   
    if (indices[compliment] !== undefined && indices[compliment] !== idx) {
      return [idx, indices[compliment]]
    }
  }
};
*/
