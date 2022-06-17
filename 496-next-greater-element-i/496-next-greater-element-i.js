/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    const ans = [];
    
    for (const item of nums1) {
        for (let i = 0; i < nums2.length; i++) {
            if (item === nums2[i]) {
                let nextGreater = item;
                for (let j = i; j < nums2.length; j++) {
                    if (nums2[j] > nextGreater) {
                        nextGreater = nums2[j];
                        break;
                    }
                }
                
                if (nextGreater === item) {
                    ans.push(-1);
                } else {
                    ans.push(nextGreater)
                }
            }
        }
    }
    
    return ans;
    
};