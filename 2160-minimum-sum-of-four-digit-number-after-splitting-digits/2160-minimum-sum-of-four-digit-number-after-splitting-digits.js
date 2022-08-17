/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    
    const digits = num.toString().split("").sort();
    const new1 = Number(digits[0] + digits[2]);
    const new2 = Number(digits[1] + digits[3]);
    
    return new1 + new2;
};