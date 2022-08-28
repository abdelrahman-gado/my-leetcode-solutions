/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    
    const totalTarvelDistance = travel.reduce((total, d) => total + d, 0);
    let MCount = 0;
    let GCount = 0;
    let PCount = 0;
    
    let MDist = totalTarvelDistance;
    let GDist = totalTarvelDistance;
    let PDist = totalTarvelDistance;
    
    garbage.forEach((house, index) => {
        
        for (const g of house) {
            if (g === "M") {
                MCount++;
            } else if (g === "P") {
                PCount++;
            } else if (g === "G") {
                GCount++;
            }
        }
    
    });
    
    let MFlag = false;
    let GFlag = false;
    let PFlag = false;
    
    for (let i = garbage.length-1; i >= 0; i--) {
        const house = garbage[i];
        
        if (!house.includes("M") && i > 0 && !MFlag) {
            MDist -= travel[i-1];
        }else {
            MFlag = true;
        }
            
        if (!house.includes("P") && i > 0 && !PFlag) {
            PDist -= travel[i-1];
        }else {
            PFlag = true;
        }
            
        if (!house.includes("G") && i > 0 && !GFlag) {
            GDist -= travel[i-1];
        } else {
            GFlag = true;
        }
    }
    
    console.log(MCount, GCount, PCount, MDist, GDist, PDist)
    return MCount + GCount + PCount + MDist + GDist + PDist;
};