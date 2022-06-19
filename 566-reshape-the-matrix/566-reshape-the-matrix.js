/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {   
    
    if (mat.length * mat[0].length !== r * c) {
        return mat;
    }

    let reshapedMatrix =[]
    for (let i = 0; i < r; i++) {
        let m = [];
        for (let j = 0; j < c; j++) {
            m.push(0);   
        }
        reshapedMatrix.push(m);   
    }
    

    let mr = 0;
    let mc = 0;
    
    for (let i = 0; i < mat.length; i++) {    
        for (let j = 0; j < mat[0].length; j++) {
            const num = mat[i][j];
            reshapedMatrix[mr][mc] = num;
            mc++;
            if (mc === c) {
                mr++;
                mc = 0;
            }
        }
    }
    
    
    return reshapedMatrix;
    
};