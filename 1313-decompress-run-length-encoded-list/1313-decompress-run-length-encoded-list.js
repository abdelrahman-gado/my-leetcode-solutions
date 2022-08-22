/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    const decompressedArr = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        const freq = nums[i];
        const val = nums[i+1];
        decompressedArr.push(...((new Array(freq)).fill(val)));
    }
    
    return decompressedArr;
};