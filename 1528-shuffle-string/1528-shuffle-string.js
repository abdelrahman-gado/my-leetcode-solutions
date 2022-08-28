/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    const shuffledArr = new Array(s.length);
    
    for (let i = 0; i < s.length; i++) {
        shuffledArr[indices[i]] = s[i];
    }
    
    return shuffledArr.join("");
};