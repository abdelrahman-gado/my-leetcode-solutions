/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    const res = new Array(nums.length);
    const stack = [];
    res.fill(-1);
    
    for (let i = 2 * nums.length - 1; i >= 0; --i) {
        
        const current = nums[i % nums.length];
        
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= current) {
            stack.pop();
        }
        
        res[i % nums.length] = stack.length === 0 ? -1 : nums[stack[stack.length - 1]];
        stack.push(i % nums.length);
    }
    
    
    return res;    
};