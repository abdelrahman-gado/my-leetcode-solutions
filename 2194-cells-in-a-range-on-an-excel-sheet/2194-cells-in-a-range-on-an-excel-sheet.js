/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    
    const cellArr = [];
    const startCol = s[0];
    const endCol = s[3];
    const startRow = s[1];
    const endRow = s[4];
    
    for (let i = startCol.charCodeAt(); i <= endCol.charCodeAt(); i++) {
        const currentCol = String.fromCharCode(i);
        for (let j = parseInt(startRow); j <= parseInt(endRow); j++) {
            const currentRow = j;
            const cell = currentCol + currentRow;
            cellArr.push(cell);
        }
    }
    
    
    return cellArr;
};