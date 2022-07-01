/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let palindromeLen = 0;
    const mapObj = {};
    for (const ch of s) {
        if (mapObj[ch] === undefined) {
            mapObj[ch] = 0;
        }
        
        mapObj[ch]++;
    }
    
    for (const ch in mapObj) {
        if (mapObj[ch] > 1) {
            if (mapObj[ch] % 2 === 0) {
                palindromeLen += mapObj[ch]; 
            } else {
                palindromeLen += mapObj[ch]-1;
            }
        }
    }
    
    if (palindromeLen < s.length) {
        return palindromeLen + 1;
    }
    
    return palindromeLen;
};