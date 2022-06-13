/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    const strBits = n.toString(2);
    
    let onesCount = 0;
    for (let i = 0; i < strBits.length; i++) {
        if (strBits[i] === '1') {
            onesCount++;
        }
    }
    
    return onesCount;
};