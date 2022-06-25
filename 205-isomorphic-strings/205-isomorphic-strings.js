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
        if (!map1.has(s[i]))  {
            map1.set(s[i], t[i]);
        }
        
        if (!map2.has(t[i])) {
            map2.set(t[i], s[i]);
        }
    }
    
    
    let created_t = "";
    let created_s = "";
    
    for (let i = 0; i < t.length; i++) {
        created_t += map1.get(s[i]);
        created_s += map2.get(t[i]);
    }
    
    
    return created_t === t && created_s === s;
};