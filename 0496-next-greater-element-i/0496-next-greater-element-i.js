/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    const map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }
    
    let res = new Array(nums1.length);
    const stack = [];
    res.fill(-1);
    
    for (const cur of nums2) {
        
        while (stack.length > 0 && cur > stack[stack.length - 1]) {
            const item = stack.pop();
            res[map.get(item)] = cur;
        }
        
        if (map.has(cur)) {
            stack.push(cur);
        }
    }
    
    return res;
};