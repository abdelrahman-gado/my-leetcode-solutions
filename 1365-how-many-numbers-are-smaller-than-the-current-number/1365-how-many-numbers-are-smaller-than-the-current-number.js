/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    const smallerArr = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i && nums[j] < nums[i]) {
                count++;
            }
        }
        
        smallerArr.push(count);
    }
    
    
    return smallerArr;
};