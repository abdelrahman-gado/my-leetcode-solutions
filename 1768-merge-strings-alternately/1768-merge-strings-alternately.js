/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let start1 = 0;
    let start2 = 0;
    
    let mergedStr = '';
    
    while (start1 < word1.length && start2 < word2.length) {
        
        const ch1 = word1[start1];
        const ch2 = word2[start2];
        
        mergedStr += (ch1+ch2);
        
        start1++;
        start2++;
    }
    
    while (start1 < word1.length) {
        mergedStr += word1[start1];
        start1++;
    }
    
    while (start2 < word2.length) {
        mergedStr += word2[start2];
        start2++;
    }
    
    return mergedStr;
};