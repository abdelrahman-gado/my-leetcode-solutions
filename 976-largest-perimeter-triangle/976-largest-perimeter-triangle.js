/**
 * @param {number[]} nums
 * @return {number}
 */

const testTriangle = function (first, second, third) {
    if ((first + second > third) && 
        (second + third > first) &&
        (first + third > second)) {
        
        return true;
    }
    
    return false;
}


var largestPerimeter = function(nums) {
    
    nums.sort((a, b) => a-b);
    let maxPerimeter = 0;
    
    for (let i = 0; i <= nums.length-3; i++) {
        const currentPerimeter = nums[i] + nums[i+1] + nums[i+2];
        if (testTriangle(nums[i], nums[i+1], nums[i+2]) && currentPerimeter > maxPerimeter ) {
            maxPerimeter = currentPerimeter;
        }
        
    }
    
    
    return maxPerimeter;
};