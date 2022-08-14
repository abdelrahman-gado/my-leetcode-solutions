/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
    let is_increasing = true;
    let is_decreasing = true;
    
    for (let i = 0; i < nums.length-1; i++) {
        
        if (nums[i] > nums[i+1]) {
            is_increasing = false;
        }
        
        if (nums[i] < nums[i+1]) {
            is_decreasing = false;
        }
        
        if (!is_increasing && !is_decreasing) {
            return false;
        }
    }
    
    return true;
};