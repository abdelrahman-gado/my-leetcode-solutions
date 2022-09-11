/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let item of items) {
        if (("type" === ruleKey && ruleValue === item[0]) ||
            ("color" === ruleKey && ruleValue === item[1]) ||
            ("name" === ruleKey && ruleValue === item[2])) {
            count++;
        }
    }
    
    return count;
};