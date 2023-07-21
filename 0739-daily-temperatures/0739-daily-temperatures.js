/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const res = new Array(temperatures.length);
    res.fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        
        let days = 0;
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                days = j - i;
                break;
            }
        }
        
        res[i] = days;
    }
    
    return res;
};