/**
 * @param {number[]} arr
 * @return {number[]}
 */

const countNumberOfOnes = function (str) {
    let count = 0;
    for (const digit of str) {
        if (digit === '1') {
            count++;
        }
    }
    
    return count;
}


var sortByBits = function(arr) {
    arr.sort((a, b) => {
        const aCount = countNumberOfOnes(a.toString(2));
        const bCount = countNumberOfOnes(b.toString(2));
        if (aCount < bCount) {
            return -1;
        } else if (aCount === bCount) {
            return a-b;            
        } else {
            return 1;
        }
    })
    
    return arr;
};