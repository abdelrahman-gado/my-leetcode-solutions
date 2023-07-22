/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
    const output = [];
    const q = [];
    let l = r = 0;
    
    while (r < nums.length) {
        while (q.length > 0 && nums[q[q.length-1]] < nums[r]) {
            q.pop();
        }
        
        q.push(r);
        
        if (l > q[0]) {
            q.shift();
        }
        
        if (r + 1 >= k) {
            output.push(nums[q[0]]);
            l += 1;
        } 
        
        r += 1;
    }
    
    return output;
};