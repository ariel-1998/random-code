//Question

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const numToFind = target - currentNum;
    for (let j = i + 1; j < nums.length; j++) {
      const current = nums[j];
      if (current === numToFind) return [i, j];
    }
  }
}
