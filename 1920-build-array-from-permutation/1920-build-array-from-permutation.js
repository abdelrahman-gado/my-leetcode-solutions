/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const permutatedArr = [];
    for (const num of nums) {
        permutatedArr.push(nums[num]);
    }
    
    return permutatedArr;
};