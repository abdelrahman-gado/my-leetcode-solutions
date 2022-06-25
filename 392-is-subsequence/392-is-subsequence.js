/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if (s === t) {
        return true;
    }
    
    
    let sequence = -1;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const index = t.indexOf(ch, sequence+1);
        if (index === -1) {
            return false;
        }
        
        
        if (index > sequence) {
            sequence = index;
        } else {
            return false;
        }
    }
    
    
    return true;
};