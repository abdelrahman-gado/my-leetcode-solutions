/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const res = new Array(temperatures.length);
    const stack = [];
    res.fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        
        const currentTemp = temperatures[i];
        
        while (stack.length > 0 && currentTemp > temperatures[stack[stack.length-1]]) {
            const index = stack.pop(); 
            res[index] = i - index;
        }
        
        stack.push(i);
    }
    
    return res;
};