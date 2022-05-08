/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var removeHash = function(str) {
    let s = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            s.pop();
        } else {
            s.push(str[i]);
        }
    }
    
    return s.join('');
}



var backspaceCompare = function(s, t) {
    let sWithoutHash = removeHash(s);
    let tWithoutHash = removeHash(t);
    
    return sWithoutHash === tWithoutHash;
};