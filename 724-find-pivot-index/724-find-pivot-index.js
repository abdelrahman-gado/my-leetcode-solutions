/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = 0;
    for (const num of nums) {
        sum += num;
    } 
    
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === (sum - leftSum - nums[i])) {
            return i;
        }
        
        leftSum += nums[i];
    }
    
    return -1;
};