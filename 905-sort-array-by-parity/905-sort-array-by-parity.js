/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    const evenArr = [];
    const oddArr = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num);
        }
    }
    
    return evenArr.concat(oddArr);
};