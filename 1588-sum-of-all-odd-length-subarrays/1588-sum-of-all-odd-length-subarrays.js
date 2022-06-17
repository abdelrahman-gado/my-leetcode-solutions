/**
 * @param {number[]} arr
 * @return {number}
 */

const arrSum = function(arr) {
    return arr.reduce((total, item) => total + item, 0);
}


var sumOddLengthSubarrays = function(arr) {
    
    let totalOddArrSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const size = j - i + 1;
            if (size % 2 == 1) {
                totalOddArrSum += arrSum(arr.slice(i, j+1));
            }
        }
    }
    
    return totalOddArrSum;
    
};