/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    const point1 = coordinates[0];
    const point2 = coordinates[1];
    let m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
    if (m === Infinity || m === -Infinity) {
        m = null;
    }
    
    for (let i = 1; i < coordinates.length-1; i++) {
        const [cpoint1, cpoint2] = [coordinates[i], coordinates[i+1]];
        let cm = (cpoint2[1] - cpoint1[1]) / (cpoint2[0] - cpoint1[0]);
        
        if (cm === Infinity || cm === -Infinity) {
            cm = null;
        }
        
        if (m !== cm) {
            return false;
        }
    }
    
    return true;
    
};