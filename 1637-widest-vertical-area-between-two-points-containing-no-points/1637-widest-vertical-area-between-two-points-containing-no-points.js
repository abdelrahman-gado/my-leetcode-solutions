/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const sortedPoints = [...points].sort((a, b) => a[0] - b[0]);
    const verticalAreas = [];
    for (let i = 0; i < sortedPoints.length - 1; i++) {
        verticalAreas.push(sortedPoints[i+1][0] - sortedPoints[i][0]);
    }
    
    
    return Math.max(...verticalAreas);
};