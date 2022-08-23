/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
        const maxRowNum = Math.max(...grid[i]);
        for (let j = 0; j < grid.length; j++) {
            
            let maxColNum = -1;
            for (let k = 0; k < grid.length; k++) {
                if (grid[k][j] > maxColNum) {
                    maxColNum = grid[k][j];
                }
            }
            
            const num = Math.min(maxRowNum, maxColNum);
            
            sum += (num - grid[i][j]);
            grid[i][j] += (num - grid[i][j]);
        }
    }
    
    console.log(grid);
    return sum;
};