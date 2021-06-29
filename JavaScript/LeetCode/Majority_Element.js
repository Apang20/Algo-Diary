/*
INSTRUCTIONS:
Given an array nums of size n, 
return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3


Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1


PSEUDOCODE
-declare a variable to hold the formula to find majority element
-declare empty object 
-iterate through nums array 
-declare the var value to hold the index of nums 
-assign value to newObj's key and check if element exists
-if yes, increment, if not then value = 1
-conditional statement to check newObj against formula
*/


let majorityElement = function(nums) {
    let formula = Math.floor(nums.length/2);
    let newObj = {}; 

    for (let i = 0; i < nums.length; i++){
        let value = nums[i];
        newObj[value] = newObj[value] + 1 || 1 
        if (newObj[value] > formula)
        return value;
    }
}