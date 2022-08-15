/**
 * @param {string} n
 * @return {number}
 */

var minPartitions = function(n) {
    const nAsStr = n.toString();
    const maxDigit = Math.max(...(nAsStr.split("").map(n => Number(n))));
    return maxDigit;
};