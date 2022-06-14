/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    
    let index = -1;
    let minDist = Number.MAX_VALUE;
    
    for (let i = 0; i < points.length; i++) {
        const [currentX, currentY] = points[i];
        if (currentX === x || currentY === y) {
            const currentManDist = Math.abs(currentX - x) + Math.abs(currentY - y);
            if (currentManDist < minDist) {
                minDist = currentManDist;
                index = i;
            }
        }
    }
    
    return index;
};