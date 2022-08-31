/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    
    const positionOfOnes = [];
    const operations = [];
    
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === "1") {
            positionOfOnes.push(i);
        }
    }
    
    for (let i = 0; i < boxes.length; i++) {
        let operationCount = 0;
        for (let j = 0; j < positionOfOnes.length; j++) {
            operationCount += Math.abs(positionOfOnes[j] - i);
        }
        operations.push(operationCount);
    }
    
    
    return operations;
};