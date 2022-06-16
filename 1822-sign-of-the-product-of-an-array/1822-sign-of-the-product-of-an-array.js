/**
 * @param {number[]} nums
 * @return {number}
*/

const singFunc = function(x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    } else {
        return 0;
    }
}

var arraySign = function(nums) {
    
    let product = 1;
    
    for (const num of nums) {
        product *= num;
    }
    
    return singFunc(product);
};