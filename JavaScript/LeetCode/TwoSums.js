//https://leetcode.com/problems/two-sum/


//create an object where the keys will be the number we would have to add
//to a given element to equal the target
//and the values will be the index where the given element is located in the nums array

//Less Efficient Solution:
//Time Complexity = O(N^2) - nested iteration
//Space Complexity = O(1) - constant (not allocating any extra memory)
function twoSum(nums, target){
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};


/*
Big O Solution
Time Complexity = O(N)
Space Complexity = O(N)

Hashmap (space complexity is linear)

We want to traverse this array exactly once 
nums = [1, 5, 9]
target = 10

map = {1: 0, 5: 1, 9: 2} //added as iterated
--> value = 1 , i = 0  
--> value = 5 , i = 1  
--> value = 9 , i = 2

complement_pair = 10 - 1 = 9 
complement_pair = 10 - 5 = 5 
complement_pair = 10 - 9 = 1
return [0, 2]
map [1]
*/

function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complementPair = target - value; 

        if(map[complementPair] !== undefined){
            return [map[complimentPair], i];
        }else{
            map[value] = i; 
            //if it is not in the map, 
            //we want to record we have seen the value we are on
        }
    }
};




//Alternative Solution: 
function twoSum(nums, target) {
    // initialize empty array for indexes
    const indexesArray = [];

    nums.forEach((num, index) => {
        // subtract number you're looped on from the target number
        const difference = target - num;

        // see if that number is in the array and that it's not the same index as you're currently on
        if (nums.includes(difference) && nums.indexOf(difference) !== index && indexesArray.length === 0) {
            // if that condition is met you'll push your current index and the index of that difference value
            indexesArray.push(index, nums.indexOf(difference))
        }
    });

    return indexesArray;
};