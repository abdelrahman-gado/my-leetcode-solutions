/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }
    
    for (let i = 0; i < words.length-1; i++) {
        
        const word1 = words[i];
        const word2 = words[i+1];
        let isSmaller = false;
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            
            if (word1[j] != word2[j]) {
                if (map.get(word1[j]) > map.get(word2[j])) {
                    return false;
                } else {
                    isSmaller = true;
                    break;
                }
            }
        }
        
        if (!isSmaller && word1.length > word2.length)
            return false;
        else
            continue;
        
    }
    
    
    return true;
};