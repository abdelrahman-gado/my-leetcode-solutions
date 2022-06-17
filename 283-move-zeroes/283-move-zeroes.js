/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    const nonZeros = [];
    const zeros = [];
    
    for (const num of nums) {
        if (num !== 0) {
            nonZeros.push(num);
        } else {
            zeros.push(0);
        }
    }
    
    const n = nonZeros.concat(zeros);
    nums.splice(0, nums.length, ...n)
};