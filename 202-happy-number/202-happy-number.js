/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const start = n;
    let num = n;
    let set = new Set();
    
    while (true) {
         
        const numStr = num.toString();
        
        let result = 0;
        
        for (const digit of numStr) {
            result += Math.pow(parseInt(digit), 2);
        }
        
        num = result;
        
        if (set.has(num)) {
            return false;
        } else {
            set.add(num);
        }
        
        if (num === 1) {
            return true;
        }
        
    }
    
    return false;
};