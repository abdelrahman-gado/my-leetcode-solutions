/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    const res = [];
    const numsLen = nums.length;

    for (let i = 0; i < numsLen; i++) {
        let current = nums[i];
        
        let nextGreater = -1;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] > current) {
                nextGreater = nums[j];
                break;
            }
        }
        
        res.push(nextGreater);
        nums.push(current);
    }
    
    return res;
};