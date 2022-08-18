/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    const jewelSet = new Set();
    for (const jewel of jewels) {
        jewelSet.add(jewel);
    }
    
    
    let jewelsCount = 0;
    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            jewelsCount++;
        }
    }
    
    return jewelsCount;
};