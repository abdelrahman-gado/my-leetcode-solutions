/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    const result = [];
    
    for (const num1 of nums1) {
        
        let found = false;
        let nextGreater = -1;
        for (const num2 of nums2) {
            
            if (!found && num1 === num2) {
                found = true;
                continue;
            }
            
            if (found && num2 > num1 && num2 > nextGreater) {
                nextGreater = num2;
                break;
            }
        }
        
        result.push(nextGreater);
    }
    
    
    return result;
};