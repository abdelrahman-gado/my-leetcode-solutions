/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    const summingArr = new Array(nums.length);
    summingArr.fill(0);
    
    summingArr[0] = nums[0];
    
    for (let i = 1; i < summingArr.length; i++) {
        summingArr[i] = summingArr[i-1] + nums[i];
    }
    
    return summingArr;
};