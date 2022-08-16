/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    const shuffledArr = [];
    for (let start1 = 0, start2 = n; start2 < nums.length; start1++, start2++){
        shuffledArr.push(nums[start1]);
        shuffledArr.push(nums[start2]);
    }
    
    return shuffledArr;
};