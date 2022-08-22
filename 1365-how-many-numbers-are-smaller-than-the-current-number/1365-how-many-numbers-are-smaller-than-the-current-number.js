/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    const sortedArr = [...nums];
    sortedArr.sort((a, b) => a-b);
    const finalArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        finalArr.push(sortedArr.indexOf(nums[i]));
    }
    
    return finalArr;
};