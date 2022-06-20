/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    let decryptedStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i+2] === '#') {
            if (s[i] === '#') {
                i++;
            }
            const num = parseInt(s[i]+s[i+1]) - 1;
            const ch =  String.fromCharCode(num + 'a'.charCodeAt());
            decryptedStr += ch;
            i += 2;
        } else {
            const num = parseInt(s[i]) - 1;
            const ch =  String.fromCharCode(num + 'a'.charCodeAt());
            decryptedStr += ch;
            
        }
        
    }
    
    
    
    return decryptedStr;
    
};