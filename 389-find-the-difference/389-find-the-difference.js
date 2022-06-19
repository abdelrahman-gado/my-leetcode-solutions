/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const slist = s.split("").sort();
    const tlist = t.split("").sort();
    
    for (let i = 0; i < tlist.length; i++) {
        if (tlist[i] !== slist[i]) {
            return tlist[i];
        }
    }
    
    return '';
};