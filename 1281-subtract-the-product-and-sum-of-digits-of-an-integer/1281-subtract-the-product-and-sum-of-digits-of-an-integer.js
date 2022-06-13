/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    const nAsStr = n.toString();
    
    let sum = 0;
    let product = 1;
    
    for (let i = 0; i < nAsStr.length; i++) {
        
        const currentNum = parseInt(nAsStr[i]);
        
        sum += currentNum;
        product *= currentNum;
    }
    
    
    return product - sum;
};