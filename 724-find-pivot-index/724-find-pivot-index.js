/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        
        let sumBefore = 0;
        for (let j = i-1; j >= 0; j--) {
            sumBefore += nums[j];
        }
        
        let sumAfter = 0;
        for (let j = i+1; j < nums.length; j++) {
            sumAfter += nums[j];
        }
        
        if (sumAfter === sumBefore) {
            return i;
        }
        
    }
    
    
    return -1;
};