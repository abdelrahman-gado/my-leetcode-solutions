/**
 * @param {number[][]} accounts
 * @return {number}
 */

const getWealth = function (arr) {
    return arr.reduce((total, item) => total+item, 0);
}

var maximumWealth = function(accounts) {
    
    let maximum = -1;
    for (let i = 0; i < accounts.length; i++) {
        const wealth = getWealth(accounts[i]);
        if (wealth > maximum) {
            maximum = wealth;
        }
    }
    
    return maximum;
};