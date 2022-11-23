/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
*/

const nums1 = [1,2,3,1];
const nums2 = [1,2,3,4];

const containsDuplicate = num => {
    const uniqueNum = new Set(num);
    return num.length !== uniqueNum.size;
}

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
