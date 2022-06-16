/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    
    const tempArr = [...arr];
    tempArr.sort((a, b) => a-b);
    
    const diff = tempArr[1] - tempArr[0];
    
    for (let i = 1; i < tempArr.length-1; i++) {
        if (diff !== (tempArr[i+1] - tempArr[i])) {
            return false;
        }
    }
    
    
    return true;
};