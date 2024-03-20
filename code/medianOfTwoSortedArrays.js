//Question
//Given two sorted arrays nums1 and nums2 of size m and n respectively,
//return the median of the two sorted arrays.
//The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//complaxity O(m + n)
const findMedianSortedArrays = function (nums1, nums2) {
  const newArr = [];
  const length = nums1.length + nums2.length;
  let firstIndex = 0;
  let secondIndex = 0;
  for (let i = 0; i < length; i++) {
    if (nums1[firstIndex] < nums2[secondIndex] || secondIndex >= nums2.length) {
      newArr.push(nums1[firstIndex]);
      firstIndex++;
    } else {
      newArr.push(nums2[secondIndex]);
      secondIndex++;
    }
  }
  const middleIndex1 = Math.floor(length / 2);
  let results = newArr[middleIndex1];
  if (length % 2 !== 0) return results;
  results = (results + newArr[middleIndex1 - 1]) / 2;
  return results;
};

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
//complaxity O(log (m+n))
// const betterFindMedianSortedArrays = (nums1, nums2) => {
//   const length1 = nums1.length;
//   const length2 = nums2.length;
//   const totalLength = length1 + length2;
//   let middle = Math.floor(totalLength / 2);
// let start = 0
// let end = totalLength

// };

// /**
//  *
//  * @param {number[]} arr
//  * @returns {number}
//  */
// function getMedian(arr) {
//   const mid = Math.floor(arr.length / 2);
//   //meaning arr has even numbers
//   if (arr.length % 2 === 0) {
//     return (arr[mid] + arr[mid - 1]) / 2;
//   }
//   return arr[mid];
// }
