/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    const minLR = [];
    
    let tempMax = 0;
    for (let i = 0; i < height.length; i++) {
        maxLeft.push(tempMax);
        
        if (height[i] > tempMax) {
            tempMax = height[i];
        }
    }
    
    tempMax = 0;
    for (let i = height.length-1; i >= 0; i--) {
        maxRight.unshift(tempMax);
        
        if (height[i] > tempMax) {
            tempMax = height[i];
        }
    }
    
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        let waterTrapped = Math.min(maxLeft[i], maxRight[i]) - height[i];
        result += (waterTrapped) > 0 ? waterTrapped : 0;
    }
    
    
    return result;
};