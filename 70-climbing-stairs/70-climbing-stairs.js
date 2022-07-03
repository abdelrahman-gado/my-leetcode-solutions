/**
 * @param {number} n
 * @return {number}
 */

const cache = new Map();

var climbStairs = function(n) {
    
    if (cache.has(n)) {
        return cache.get(n);
    }
    
    let result = 0;
    
    if (n === 1) {
        result = 1;
    } else if (n === 2) {
        result = 2;
    } else {
        result = climbStairs(n-1) + climbStairs(n-2);
    }
    
    cache.set(n, result);
    
    return result;
};