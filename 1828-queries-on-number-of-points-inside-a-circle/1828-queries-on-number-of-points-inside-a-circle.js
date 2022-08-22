/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    
    const arr = [];
    
    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        const qx = q[0];
        const qy = q[1];
        const qr = q[2];
        let numOfPoints = 0;
        for (let j = 0; j < points.length; j++) {
            const point = points[j];
            const px = point[0];
            const py = point[1];
            
            const d = Math.sqrt(Math.pow((px-qx), 2) + Math.pow((py-qy), 2));
            
            if (d <= qr) {
                numOfPoints++;
            }
            
        }
        
        arr.push(numOfPoints);
    }
    
    return arr;
};