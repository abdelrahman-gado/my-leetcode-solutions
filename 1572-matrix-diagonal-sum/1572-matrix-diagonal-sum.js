/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        const j = mat.length-1-i;
        sum += mat[i][i];
        if (i !== j) {
            sum += mat[i][j];
        }
    }
    
    return sum;
    
};