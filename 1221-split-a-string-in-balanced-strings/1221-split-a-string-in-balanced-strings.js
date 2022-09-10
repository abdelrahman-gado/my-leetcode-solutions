/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let numOfL = 0;
    let numOfR = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            numOfR++;
        } else {
            numOfL++;
        }
        
        if (numOfR === numOfL) {
            count++;
            numOfL = 0;
            numOfR = 0;
        }
    }
    
    return count;
};