/**
 * @param {number} n
 * @return {boolean}
 */

const nextNumber = function (num) {
    
    let totalNum = 0;
    
    while(num > 0) {
        const d = num % 10;
        num = parseInt(num / 10);
        totalNum += d * d;
    }
    
    return totalNum;
}

var isHappy = function(n) {
    
    let num = n;
    let set = new Set();
    
    while (true) {
        
        let result = nextNumber(num);
        
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