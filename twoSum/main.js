// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const numbers = [2, 7, 11, 15];
const targetValue = 9;

const twoSum = (nums, target) => {
  let newArr;
  nums.some((item, i) => {
    let index = i;
    for (index; index < nums.length;) {
      index += 1;
      if (nums[i] + nums[index] === target) {
        newArr = [i, index];
        break;
      }
    }
    if (newArr) {
      return true;
    }
  });
  return newArr;
}

console.log(twoSum(numbers, targetValue));