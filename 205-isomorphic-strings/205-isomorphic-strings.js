/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if (s.length !== t.length) {
        return false;
    }
    
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < s.length; i++) {
        
        if (!map1.has(s[i]) && !map2.has(t[i])) {
            map1.set(s[i], t[i]);
            map2.set(t[i], s[i]);
        } else if (!(map1.get(s[i]) === t[i] && map2.get(t[i]) === s[i])) {
            return false;
        }
        
    }
    
    return true;
};