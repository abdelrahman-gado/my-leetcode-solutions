/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const decoder = {};
    let start = "a".charCodeAt();
    for (let d of key) {
        if (d === " ") {
            continue;
        }
        
        if (!decoder[d]) {
            decoder[d] = String.fromCharCode(start);
            start++;
        }
    }
    
    let decodedStr = "";
    for (let ch of message) {
        if (ch === " ") {
            decodedStr += " ";
        } else {
            decodedStr += decoder[ch];   
        }
    }
    
    return decodedStr;
};