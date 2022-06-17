/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const swapArrItems = function(arr, pos1, pos2) {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

var areAlmostEqual = function(s1, s2) {
    
    if (s1 === s2) {
        return true;
    }
    
    
    
    for (let i = 0; i < s1.length; i++) {
        for (let j = i+1; j < s1.length; j++) {
            const arrOfs1 = s1.split('');
            swapArrItems(arrOfs1, i, j);
            if (s2 === arrOfs1.join('')) {
                return true;
            }
        }
    }
    
    
    return false;
};