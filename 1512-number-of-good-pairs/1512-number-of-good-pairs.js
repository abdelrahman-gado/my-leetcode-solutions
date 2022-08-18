/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    let goodPairsCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (i < j && nums[i] === nums[j]) {
                goodPairsCount++;   
            }
        }
    }
    
    return goodPairsCount;
};