/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    
    let i = 0;
    let nums = [];
    while (i < n) {
        nums.push((start + (i * 2)));
        i++;
    }
    
    console.log(nums)
    return nums.reduce((prev, curr) => {
        return prev ^ curr;   
    });
};