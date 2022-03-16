// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0 - indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.If there is no next greater element, then the answer for this query is - 1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

const numbers1 = [1, 3, 5, 2, 4, 8];
const numbers2 = [6, 5, 3, 2, 1, 4, 8, 7, 9];

const nextGreaterElement = (nums1, nums2) => nums1.map((val) => {
  const index = nums2.indexOf(val);
  for (let i = index + 1; i < nums2.length; i++) {
    const nextValue = nums2[i];
    if ((nextValue || 0) > val) {
      return nextValue;
    }
  }
  return -1;
});

console.log(nextGreaterElement(numbers1, numbers2));